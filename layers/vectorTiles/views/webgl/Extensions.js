// COPYRIGHT © 2017 Esri
//
// All rights reserved under the copyright laws of the United States
// and applicable international laws, treaties, and conventions.
//
// This material is licensed for use under the Esri Master License
// Agreement (MLA), and is bound by the terms of that agreement.
// You may redistribute and use this code without modification,
// provided you adhere to the terms of the MLA and include this
// copyright notice.
//
// See use restrictions at http://www.esri.com/legal/pdfs/mla_e204_e300/english
//
// For additional information, contact:
// Environmental Systems Research Institute, Inc.
// Attn: Contracts and Legal Services Department
// 380 New York Street
// Redlands, California, USA 92373
// USA
//
// email: contracts@esri.com
//
// See http://js.arcgis.com/3.23/esri/copyright.txt for details.

define(["require","exports"],function(t,e){var i=function(){function t(t,e){if(this._vaoInit=!1,this._angleInstancedArraysInit=!1,this._standardDerivativesInit=!1,this._elementIndexUintInit=!1,this._depthTextureInit=!1,this._textureFilterAnisotropicInit=!1,this._shaderTextureLODInit=!1,this._compressedTextureS3TCInit=!1,this._disjointTimerQueryInit=!1,this._textureFloatInit=!1,this._textureFloatLinearInit=!1,this._colorBufferFloatInit=!1,this._gl=t,e&&e.disabledExtensions){var i=e.disabledExtensions;i.vao&&(this._vao=null,this._vaoInit=!0),i.angleInstancedArrays&&(this._angleInstancedArrays=null,this._angleInstancedArraysInit=!0),i.standardDerivatives&&(this._standardDerivatives=null,this._standardDerivativesInit=!0),i.elementIndexUint&&(this._elementIndexUint=null,this._elementIndexUintInit=!0),i.depthTexture&&(this._depthTexture=null,this._depthTextureInit=!0),i.textureFilterAnisotropic&&(this._textureFilterAnisotropic=null,this._textureFilterAnisotropicInit=!0),i.compressedTextureS3TC&&(this._compressedTextureS3TC=null,this._compressedTextureS3TCInit=!0),i.shaderTextureLOD&&(this._shaderTextureLOD=null,this._shaderTextureLODInit=!0),i.disjointTimerQuery&&(this._disjointTimerQuery=null,this._disjointTimerQueryInit=!0),i.textureFloat&&(this._textureFloat=null,this._textureFloatInit=!0),i.textureFloatLinear&&(this._textureFloatLinear=null,this._textureFloatLinearInit=!0),i.colorBufferFloat&&(this._colorBufferFloat=null,this._colorBufferFloatInit=!0)}}return Object.defineProperty(t.prototype,"vao",{get:function(){return this._vaoInit||(this._vao=this._gl.getExtension("OES_vertex_array_object")||this._gl.getExtension("MOZ_OES_vertex_array_object")||this._gl.getExtension("WEBKIT_OES_vertex_array_object"),this._vaoInit=!0),this._vao},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"angleInstancedArrays",{get:function(){return this._angleInstancedArraysInit||(this._angleInstancedArrays=this._gl.getExtension("ANGLE_instanced_arrays"),this._angleInstancedArraysInit=!0),this._angleInstancedArrays},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"standardDerivatives",{get:function(){return this._standardDerivativesInit||(this._standardDerivatives=this._gl.getExtension("OES_standard_derivatives"),this._standardDerivativesInit=!0),this._standardDerivatives},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"elementIndexUint",{get:function(){return this._elementIndexUintInit||(this._elementIndexUint=this._gl.getExtension("OES_element_index_uint"),this._elementIndexUintInit=!0),this._elementIndexUint},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"depthTexture",{get:function(){return this._depthTextureInit||(this._depthTexture=this._gl.getExtension("WEBGL_depth_texture")||this._gl.getExtension("MOZ_WEBGL_depth_texture")||this._gl.getExtension("WEBKIT_WEBGL_depth_texture"),this._depthTextureInit=!0),this._depthTexture},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textureFilterAnisotropic",{get:function(){return this._textureFilterAnisotropicInit||(this._textureFilterAnisotropic=this._gl.getExtension("EXT_texture_filter_anisotropic")||this._gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||this._gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this._textureFilterAnisotropicInit=!0),this._textureFilterAnisotropic},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"shaderTextureLOD",{get:function(){return this._shaderTextureLODInit||(this._shaderTextureLOD=this._gl.getExtension("EXT_shader_texture_lod"),this._shaderTextureLODInit=!0),this._shaderTextureLOD},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"compressedTextureS3TC",{get:function(){return this._compressedTextureS3TCInit||(this._compressedTextureS3TC=this._gl.getExtension("WEBGL_compressed_texture_s3tc"),this._compressedTextureS3TCInit=!0),this._compressedTextureS3TC},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"disjointTimerQuery",{get:function(){return this._disjointTimerQueryInit||(this._disjointTimerQuery=this._gl.getExtension("EXT_disjoint_timer_query"),this._disjointTimerQueryInit=!0),this._disjointTimerQuery},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textureFloat",{get:function(){return this._textureFloatInit||(this._textureFloat=this._gl.getExtension("OES_texture_float"),this._textureFloatInit=!0),this._textureFloat},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"textureFloatLinear",{get:function(){return this._textureFloatLinearInit||(this._textureFloatLinear=this._gl.getExtension("OES_texture_float_linear"),this._textureFloatLinearInit=!0),this._textureFloatLinear},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"colorBufferFloat",{get:function(){return this._colorBufferFloatInit||(this._colorBufferFloat=this._gl.getExtension("EXT_color_buffer_float"),this._colorBufferFloatInit=!0),this._colorBufferFloat},enumerable:!0,configurable:!0}),t}();return i});