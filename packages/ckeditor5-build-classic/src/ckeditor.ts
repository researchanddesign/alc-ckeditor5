/**
 * @license Copyright (c) 2003-2023, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import { ClassicEditor as ClassicEditorBase } from '@ckeditor/ckeditor5-editor-classic';
import { BalloonEditor as BalloonEditorBase } from '@ckeditor/ckeditor5-editor-balloon';

import { Essentials } from '@ckeditor/ckeditor5-essentials';
import { Alignment } from '@ckeditor/ckeditor5-alignment';
import { FontSize, FontFamily, FontColor, FontBackgroundColor } from '@ckeditor/ckeditor5-font';
import { UploadAdapter } from '@ckeditor/ckeditor5-adapter-ckfinder';
import { Autoformat } from '@ckeditor/ckeditor5-autoformat';
import { Bold, Italic, Strikethrough, Subscript, Superscript, Underline } from '@ckeditor/ckeditor5-basic-styles';
import { BlockQuote } from '@ckeditor/ckeditor5-block-quote';
import { CKBox } from '@ckeditor/ckeditor5-ckbox';
import { CKFinder } from '@ckeditor/ckeditor5-ckfinder';
import { EasyImage } from '@ckeditor/ckeditor5-easy-image';
import { Heading } from '@ckeditor/ckeditor5-heading';
import { Image, ImageCaption, ImageResize, ImageStyle, ImageToolbar, ImageUpload, PictureEditing } from '@ckeditor/ckeditor5-image';
import { Indent, IndentBlock } from '@ckeditor/ckeditor5-indent';
import { Link, LinkImage } from '@ckeditor/ckeditor5-link';
import { DocumentListProperties } from '@ckeditor/ckeditor5-list';
import { MediaEmbed } from '@ckeditor/ckeditor5-media-embed';
import { Paragraph } from '@ckeditor/ckeditor5-paragraph';
import { PasteFromOffice } from '@ckeditor/ckeditor5-paste-from-office';
import { Table, TableToolbar, TableProperties, TableCellProperties, TableColumnResize } from '@ckeditor/ckeditor5-table';
import { TextTransformation } from '@ckeditor/ckeditor5-typing';
import { ShowBlocks } from '@ckeditor/ckeditor5-show-blocks';
import { SourceEditing } from '@ckeditor/ckeditor5-source-editing';
import { SpecialCharacters, SpecialCharactersEssentials } from '@ckeditor/ckeditor5-special-characters';
import { HorizontalLine } from '@ckeditor/ckeditor5-horizontal-line';
import { Style } from '@ckeditor/ckeditor5-style';
import { GeneralHtmlSupport } from '@ckeditor/ckeditor5-html-support';
import { CloudServices } from '@ckeditor/ckeditor5-cloud-services';

class ClassicEditor extends ClassicEditorBase {
	public static override builtinPlugins = [
		Essentials,
		Alignment,
		FontSize,
		FontFamily,
		FontColor,
		FontBackgroundColor,
		UploadAdapter,
		Autoformat,
		Bold,
		Italic,
		Subscript,
		Superscript,
		BlockQuote,
		CKBox,
		CKFinder,
		CloudServices,
		EasyImage,
		Heading,
		Image,
		ImageCaption,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Link,
		LinkImage,
		DocumentListProperties,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Strikethrough,
		Table,
		TableToolbar,
		TableProperties,
		TableCellProperties,
		// TableColumnResize,
		TextTransformation,
		ShowBlocks,
		SourceEditing,
		SpecialCharacters,
		SpecialCharactersEssentials,
		HorizontalLine,
		GeneralHtmlSupport,
		Style,
		Underline
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo', 'redo',
				'|', 'showBlocks', 'sourceEditing',
				'|', 'style', 'heading',
				'|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
				'|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'underline',
				'|', 'link', 'uploadImage', 'insertTable', 'blockQuote', 'mediaEmbed', 'horizontalLine', 'specialCharacters',
				'|', 'alignment',
				'|', 'bulletedList', 'numberedList', 'outdent', 'indent'
			]
		},
		image: {
			resizeUnit: 'px' as const,
			resizeOptions: [
				{
					name: 'resizeImage:original',
					value: null,
					label: 'Original'
				},
				{
					name: 'resizeImage:200',
					value: '200',
					label: '200px'
				},
				{
					name: 'resizeImage:400',
					value: '400',
					label: '400px'
				},
				{
					name: 'resizeImage:600',
					value: '600',
					label: '600px'
				}
			],
			toolbar: [
				'linkImage',
				'imageStyle:inline',
				'imageStyle:block',
				{
					name: 'imageStyle:icons',
					title: 'Alignment',
					items: [
						'imageStyle:alignLeft',
						'imageStyle:alignRight'
					],
					defaultItem: 'imageStyle:alignRight'
				},
				'resizeImage',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		},
		style: {
			definitions: [
				{
					name: 'Kicker',
					element: 'p',
					classes: [ 'kicker' ]
				},
				{
					name: 'Orange HR',
					element: 'hr',
					classes: [ 'orange' ]
				}
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'tableCellProperties'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}

class BalloonEditor extends BalloonEditorBase {
	public static override builtinPlugins = [
		Essentials,
		Alignment,
		FontSize,
		FontFamily,
		FontColor,
		FontBackgroundColor,
		UploadAdapter,
		Autoformat,
		Bold,
		Italic,
		Subscript,
		Superscript,
		BlockQuote,
		CKBox,
		CKFinder,
		CloudServices,
		EasyImage,
		Heading,
		Image,
		ImageCaption,
		ImageResize,
		ImageStyle,
		ImageToolbar,
		ImageUpload,
		Indent,
		IndentBlock,
		Link,
		LinkImage,
		DocumentListProperties,
		MediaEmbed,
		Paragraph,
		PasteFromOffice,
		PictureEditing,
		Strikethrough,
		Table,
		TableToolbar,
		TableProperties,
		TableCellProperties,
		// TableColumnResize,
		TextTransformation,
		ShowBlocks,
		SourceEditing,
		SpecialCharacters,
		SpecialCharactersEssentials,
		HorizontalLine,
		Style,
		GeneralHtmlSupport,
		Underline
	];

	public static override defaultConfig = {
		toolbar: {
			items: [
				'undo', 'redo',
				'|', 'showBlocks', 'sourceEditing',
				'|', 'style', 'heading',
				'|', 'fontfamily', 'fontsize', 'fontColor', 'fontBackgroundColor',
				'|', 'bold', 'italic', 'strikethrough', 'subscript', 'superscript', 'underline',
				'|', 'link', 'uploadImage', 'insertTable', 'blockQuote', 'mediaEmbed', 'horizontalLine', 'specialCharacters',
				'|', 'bulletedList', 'numberedList', 'outdent', 'indent'
			]
		},
		image: {
			resizeUnit: 'px' as const,
			resizeOptions: [
				{
					name: 'resizeImage:original',
					value: null,
					label: 'Original'
				},
				{
					name: 'resizeImage:200',
					value: '200',
					label: '200px'
				},
				{
					name: 'resizeImage:400',
					value: '400',
					label: '400px'
				},
				{
					name: 'resizeImage:600',
					value: '600',
					label: '600px'
				}
			],
			toolbar: [
				'linkImage',
				'imageStyle:inline',
				'imageStyle:block',
				{
					name: 'imageStyle:icons',
					title: 'Alignment',
					items: [
						'imageStyle:alignLeft',
						'imageStyle:alignRight'
					],
					defaultItem: 'imageStyle:alignRight'
				},
				'resizeImage',
				'|',
				'toggleImageCaption',
				'imageTextAlternative'
			]
		},
		style: {
			definitions: [
				{
					name: 'Kicker',
					element: 'p',
					classes: [ 'kicker' ]
				},
				{
					name: 'Orange HR',
					element: 'hr',
					classes: [ 'orange' ]
				}
			]
		},
		table: {
			contentToolbar: [
				'tableColumn',
				'tableRow',
				'mergeTableCells',
				'tableProperties',
				'tableCellProperties'
			]
		},
		// This value must be kept in sync with the language defined in webpack.config.js.
		language: 'en'
	};
}

export default {
	ClassicEditor, BalloonEditor
};
