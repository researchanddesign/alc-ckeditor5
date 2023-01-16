/**
 * @license Copyright (c) 2003-2022, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * @module engine/view/observer/observer
 */

import { DomEmitterMixin } from '@ckeditor/ckeditor5-utils';

import type Document from '../document';
import type View from '../view';

/**
 * Abstract base observer class. Observers are classes which listen to DOM events, do the preliminary
 * processing and fire events on the {@link module:engine/view/document~Document} objects.
 * Observers can also add features to the view, for instance by updating its status or marking elements
 * which need a refresh on DOM events.
 */
export default abstract class Observer extends DomEmitterMixin() {
	/**
	 * An instance of the view controller.
	 */
	public readonly view: View;

	/**
	 * A reference to the {@link module:engine/view/document~Document} object.
	 */
	public readonly document: Document;

	/**
	 * The state of the observer. If it is disabled, no events will be fired.
	 */
	private _isEnabled: boolean = false;

	/**
	 * Creates an instance of the observer.
	 */
	constructor( view: View ) {
		super();

		this.view = view;
		this.document = view.document;
	}

	/**
	 * The state of the observer. If it is disabled, no events will be fired.
	 */
	public get isEnabled(): boolean {
		return this._isEnabled;
	}

	/**
	 * Enables the observer. This method is called when the observer is registered to the
	 * {@link module:engine/view/view~View} and after {@link module:engine/view/view~View#forceRender rendering}
	 * (all observers are {@link #disable disabled} before rendering).
	 *
	 * A typical use case for disabling observers is that mutation observers need to be disabled for the rendering.
	 * However, a child class may not need to be disabled, so it can implement an empty method.
	 *
	 * @see module:engine/view/observer/observer~Observer#disable
	 */
	public enable(): void {
		this._isEnabled = true;
	}

	/**
	 * Disables the observer. This method is called before
	 * {@link module:engine/view/view~View#forceRender rendering} to prevent firing events during rendering.
	 *
	 * @see module:engine/view/observer/observer~Observer#enable
	 */
	public disable(): void {
		this._isEnabled = false;
	}

	/**
	 * Disables and destroys the observer, among others removes event listeners created by the observer.
	 */
	public destroy(): void {
		this.disable();
		this.stopListening();
	}

	/**
	 * Checks whether a given DOM event should be ignored (should not be turned into a synthetic view document event).
	 *
	 * Currently, an event will be ignored only if its target or any of its ancestors has the `data-cke-ignore-events` attribute.
	 * This attribute can be used inside the structures generated by
	 * {@link module:engine/view/downcastwriter~DowncastWriter#createUIElement `DowncastWriter#createUIElement()`} to ignore events
	 * fired within a UI that should be excluded from CKEditor 5's realms.
	 *
	 * @param domTarget The DOM event target to check (usually an element, sometimes a text node and
	 * potentially sometimes a document, too).
	 * @returns Whether this event should be ignored by the observer.
	 */
	public checkShouldIgnoreEventFromTarget( domTarget: Node | null ): boolean {
		if ( domTarget && domTarget.nodeType === 3 ) {
			domTarget = domTarget.parentNode as any;
		}

		if ( !domTarget || domTarget.nodeType !== 1 ) {
			return false;
		}

		return ( domTarget as any ).matches( '[data-cke-ignore-events], [data-cke-ignore-events] *' );
	}

	/**
	 * Starts observing the given root element.
	 *
	 * @param name The name of the root element.
	 */

	public abstract observe( domElement: HTMLElement, name: string ): void;
}

/**
 * The constructor of {@link ~Observer} subclass.
 */
export type ObserverConstructor = new ( view: View ) => Observer;
