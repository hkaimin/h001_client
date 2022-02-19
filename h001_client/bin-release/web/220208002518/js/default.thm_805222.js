window.skins=window.skins||{};
                var __extends = this && this.__extends|| function (d, b) {
                    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
                        function __() {
                            this.constructor = d;
                        }
                    __.prototype = b.prototype;
                    d.prototype = new __();
                };
                window.generateEUI = window.generateEUI||{};
                generateEUI.paths = generateEUI.paths||{};
                generateEUI.styles = undefined;
                generateEUI.skins = {"eui.Button":"resource/eui_skins/ButtonSkin.exml","eui.CheckBox":"resource/eui_skins/CheckBoxSkin.exml","eui.HScrollBar":"resource/eui_skins/HScrollBarSkin.exml","eui.HSlider":"resource/eui_skins/HSliderSkin.exml","eui.Panel":"resource/eui_skins/PanelSkin.exml","eui.TextInput":"resource/eui_skins/TextInputSkin.exml","eui.ProgressBar":"resource/eui_skins/ProgressBarSkin.exml","eui.RadioButton":"resource/eui_skins/RadioButtonSkin.exml","eui.Scroller":"resource/eui_skins/ScrollerSkin.exml","eui.ToggleSwitch":"resource/eui_skins/ToggleSwitchSkin.exml","eui.VScrollBar":"resource/eui_skins/VScrollBarSkin.exml","eui.VSlider":"resource/eui_skins/VSliderSkin.exml","eui.ItemRenderer":"resource/eui_skins/ItemRendererSkin.exml"};generateEUI.paths['resource/eui_skins/ButtonSkin.exml'] = window.skins.ButtonSkin = (function (_super) {
	__extends(ButtonSkin, _super);
	function ButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay","iconDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i(),this.iconDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
	}
	var _proto = ButtonSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	_proto.iconDisplay_i = function () {
		var t = new eui.Image();
		this.iconDisplay = t;
		t.horizontalCenter = 0;
		t.verticalCenter = 0;
		return t;
	};
	return ButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/CheckBoxSkin.exml'] = window.skins.CheckBoxSkin = (function (_super) {
	__extends(CheckBoxSkin, _super);
	function CheckBoxSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","checkbox_select_disabled_png")
				])
		];
	}
	var _proto = CheckBoxSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "checkbox_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return CheckBoxSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HScrollBarSkin.exml'] = window.skins.HScrollBarSkin = (function (_super) {
	__extends(HScrollBarSkin, _super);
	function HScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = HScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 8;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.verticalCenter = 0;
		t.width = 30;
		return t;
	};
	return HScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/HSliderSkin.exml'] = window.skins.HSliderSkin = (function (_super) {
	__extends(HSliderSkin, _super);
	function HSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 8;
		this.minWidth = 20;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = HSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.height = 6;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_sb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.source = "thumb_png";
		t.verticalCenter = 0;
		return t;
	};
	return HSliderSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ItemRendererSkin.exml'] = window.skins.ItemRendererSkin = (function (_super) {
	__extends(ItemRendererSkin, _super);
	function ItemRendererSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.minHeight = 50;
		this.minWidth = 100;
		this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","button_down_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
		];
		
		eui.Binding.$bindProperties(this, ["hostComponent.data"],[0],this.labelDisplay,"text");
	}
	var _proto = ItemRendererSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.bottom = 8;
		t.fontFamily = "Tahoma";
		t.left = 8;
		t.right = 8;
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0xFFFFFF;
		t.top = 8;
		t.verticalAlign = "middle";
		return t;
	};
	return ItemRendererSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/PanelSkin.exml'] = window.skins.PanelSkin = (function (_super) {
	__extends(PanelSkin, _super);
	function PanelSkin() {
		_super.call(this);
		this.skinParts = ["titleDisplay","moveArea","closeButton"];
		
		this.minHeight = 230;
		this.minWidth = 450;
		this.elementsContent = [this._Image1_i(),this.moveArea_i(),this.closeButton_i()];
	}
	var _proto = PanelSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.scale9Grid = new egret.Rectangle(2,2,12,12);
		t.source = "border_png";
		t.top = 0;
		return t;
	};
	_proto.moveArea_i = function () {
		var t = new eui.Group();
		this.moveArea = t;
		t.height = 45;
		t.left = 0;
		t.right = 0;
		t.top = 0;
		t.elementsContent = [this._Image2_i(),this.titleDisplay_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.bottom = 0;
		t.left = 0;
		t.right = 0;
		t.source = "header_png";
		t.top = 0;
		return t;
	};
	_proto.titleDisplay_i = function () {
		var t = new eui.Label();
		this.titleDisplay = t;
		t.fontFamily = "Tahoma";
		t.left = 15;
		t.right = 5;
		t.size = 20;
		t.textColor = 0xFFFFFF;
		t.verticalCenter = 0;
		t.wordWrap = false;
		return t;
	};
	_proto.closeButton_i = function () {
		var t = new eui.Button();
		this.closeButton = t;
		t.bottom = 5;
		t.horizontalCenter = 0;
		t.label = "close";
		return t;
	};
	return PanelSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ProgressBarSkin.exml'] = window.skins.ProgressBarSkin = (function (_super) {
	__extends(ProgressBarSkin, _super);
	function ProgressBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb","labelDisplay"];
		
		this.minHeight = 18;
		this.minWidth = 30;
		this.elementsContent = [this._Image1_i(),this.thumb_i(),this.labelDisplay_i()];
	}
	var _proto = ProgressBarSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_pb_png";
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.percentHeight = 100;
		t.source = "thumb_pb_png";
		t.percentWidth = 100;
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.horizontalCenter = 0;
		t.size = 15;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		t.verticalCenter = 0;
		return t;
	};
	return ProgressBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/RadioButtonSkin.exml'] = window.skins.RadioButtonSkin = (function (_super) {
	__extends(RadioButtonSkin, _super);
	function RadioButtonSkin() {
		_super.call(this);
		this.skinParts = ["labelDisplay"];
		
		this.elementsContent = [this._Group1_i()];
		this.states = [
			new eui.State ("up",
				[
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","alpha",0.7)
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","alpha",0.5)
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_up_png")
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_down_png")
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image1","source","radiobutton_select_disabled_png")
				])
		];
	}
	var _proto = RadioButtonSkin.prototype;

	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.percentHeight = 100;
		t.percentWidth = 100;
		t.layout = this._HorizontalLayout1_i();
		t.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
		return t;
	};
	_proto._HorizontalLayout1_i = function () {
		var t = new eui.HorizontalLayout();
		t.verticalAlign = "middle";
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.alpha = 1;
		t.fillMode = "scale";
		t.source = "radiobutton_unselect_png";
		return t;
	};
	_proto.labelDisplay_i = function () {
		var t = new eui.Label();
		this.labelDisplay = t;
		t.fontFamily = "Tahoma";
		t.size = 20;
		t.textAlign = "center";
		t.textColor = 0x707070;
		t.verticalAlign = "middle";
		return t;
	};
	return RadioButtonSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ScrollerSkin.exml'] = window.skins.ScrollerSkin = (function (_super) {
	__extends(ScrollerSkin, _super);
	function ScrollerSkin() {
		_super.call(this);
		this.skinParts = ["horizontalScrollBar","verticalScrollBar"];
		
		this.minHeight = 20;
		this.minWidth = 20;
		this.elementsContent = [this.horizontalScrollBar_i(),this.verticalScrollBar_i()];
	}
	var _proto = ScrollerSkin.prototype;

	_proto.horizontalScrollBar_i = function () {
		var t = new eui.HScrollBar();
		this.horizontalScrollBar = t;
		t.bottom = 0;
		t.percentWidth = 100;
		return t;
	};
	_proto.verticalScrollBar_i = function () {
		var t = new eui.VScrollBar();
		this.verticalScrollBar = t;
		t.percentHeight = 100;
		t.right = 0;
		return t;
	};
	return ScrollerSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/TextInputSkin.exml'] = window.skins.TextInputSkin = (function (_super) {
	__extends(TextInputSkin, _super);
	function TextInputSkin() {
		_super.call(this);
		this.skinParts = ["textDisplay","promptDisplay"];
		
		this.minHeight = 40;
		this.minWidth = 300;
		this.elementsContent = [this._Image1_i(),this._Rect1_i(),this.textDisplay_i()];
		this.promptDisplay_i();
		
		this.states = [
			new eui.State ("normal",
				[
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("textDisplay","textColor",0xff0000)
				])
			,
			new eui.State ("normalWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
			,
			new eui.State ("disabledWithPrompt",
				[
					new eui.AddItems("promptDisplay","",1,"")
				])
		];
	}
	var _proto = TextInputSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.percentHeight = 100;
		t.scale9Grid = new egret.Rectangle(1,3,8,8);
		t.source = "button_up_png";
		t.percentWidth = 100;
		return t;
	};
	_proto._Rect1_i = function () {
		var t = new eui.Rect();
		t.fillColor = 0xffffff;
		t.percentHeight = 100;
		t.percentWidth = 100;
		return t;
	};
	_proto.textDisplay_i = function () {
		var t = new eui.EditableText();
		this.textDisplay = t;
		t.height = 24;
		t.left = "10";
		t.right = "10";
		t.size = 20;
		t.textColor = 0x000000;
		t.verticalCenter = "0";
		t.percentWidth = 100;
		return t;
	};
	_proto.promptDisplay_i = function () {
		var t = new eui.Label();
		this.promptDisplay = t;
		t.height = 24;
		t.left = 10;
		t.right = 10;
		t.size = 20;
		t.textColor = 0xa9a9a9;
		t.touchEnabled = false;
		t.verticalCenter = 0;
		t.percentWidth = 100;
		return t;
	};
	return TextInputSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/ToggleSwitchSkin.exml'] = window.skins.ToggleSwitchSkin = (function (_super) {
	__extends(ToggleSwitchSkin, _super);
	function ToggleSwitchSkin() {
		_super.call(this);
		this.skinParts = [];
		
		this.elementsContent = [this._Image1_i(),this._Image2_i()];
		this.states = [
			new eui.State ("up",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("down",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("disabled",
				[
					new eui.SetProperty("_Image1","source","off_png")
				])
			,
			new eui.State ("upAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("downAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
			,
			new eui.State ("disabledAndSelected",
				[
					new eui.SetProperty("_Image2","horizontalCenter",18)
				])
		];
	}
	var _proto = ToggleSwitchSkin.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		this._Image1 = t;
		t.source = "on_png";
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		this._Image2 = t;
		t.horizontalCenter = -18;
		t.source = "handle_png";
		t.verticalCenter = 0;
		return t;
	};
	return ToggleSwitchSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/BagUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin1 = 	(function (_super) {
		__extends(LoginUI$Skin1, _super);
		function LoginUI$Skin1() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin1.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_yellow_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin1;
	})(eui.Skin);

	var LoginUI$Skin2 = 	(function (_super) {
		__extends(LoginUI$Skin2, _super);
		function LoginUI$Skin2() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_type2_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin2.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_type1_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin2;
	})(eui.Skin);

	var LoginUI$Skin3 = 	(function (_super) {
		__extends(LoginUI$Skin3, _super);
		function LoginUI$Skin3() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin3.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_zuanshi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin3;
	})(eui.Skin);

	var LoginUI$Skin4 = 	(function (_super) {
		__extends(LoginUI$Skin4, _super);
		function LoginUI$Skin4() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin4.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_coin";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin4;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["res_group","res_scroller","btn_fashion","t_shi","t_zhuang","btn_one_lb","btn_paopao","t_pao1","t_pao2","btn_two_lb","btn_texiao","t_te","t_xiao","btn_three_lb","btn_daoju","t_dao","t_ju","btn_four_lb","btn_close","shop_show_info","shop_show_icon","btn_buy","img_coin_bg","img_zuan_bg","btn_noticetip","btn_shop3","coin_num_lb","zuan_num_lb"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.res_scroller_i(),this.btn_fashion_i(),this.t_shi_i(),this.t_zhuang_i(),this.btn_one_lb_i(),this.btn_paopao_i(),this.t_pao1_i(),this.t_pao2_i(),this.btn_two_lb_i(),this.btn_texiao_i(),this.t_te_i(),this.t_xiao_i(),this.btn_three_lb_i(),this.btn_daoju_i(),this.t_dao_i(),this.t_ju_i(),this.btn_four_lb_i(),this.btn_close_i(),this._Image4_i(),this._Image5_i(),this.shop_show_info_i(),this._Button1_i(),this.shop_show_icon_i(),this.btn_buy_i(),this.img_coin_bg_i(),this.img_zuan_bg_i(),this.btn_noticetip_i(),this.btn_shop3_i(),this.coin_num_lb_i(),this.zuan_num_lb_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 750;
		t.source = "mask_layer_png";
		t.visible = false;
		t.width = 1334;
		t.x = -1.5;
		t.y = 1.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 627.08;
		t.scale9Grid = new egret.Rectangle(30,30,140,142);
		t.source = "fighting_kuang_png";
		t.width = 1137.82;
		t.x = 104.23;
		t.y = 88.93;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 571.33;
		t.scale9Grid = new egret.Rectangle(4,8,146,142);
		t.source = "normal_bg_1_png";
		t.width = 895.77;
		t.x = 306.23;
		t.y = 117.18;
		return t;
	};
	_proto.res_scroller_i = function () {
		var t = new eui.Scroller();
		this.res_scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 552.91;
		t.name = "res_scroller";
		t.width = 570;
		t.x = 308.28;
		t.y = 126.67;
		t.viewport = this.res_group_i();
		return t;
	};
	_proto.res_group_i = function () {
		var t = new eui.Group();
		this.res_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 554.42;
		t.name = "res_group";
		t.width = 569;
		t.x = -1.52;
		return t;
	};
	_proto.btn_fashion_i = function () {
		var t = new eui.Image();
		this.btn_fashion = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.09;
		t.name = "btn_fashion";
		t.source = "rank_select_02_png";
		t.width = 163.42;
		t.x = 142.17;
		t.y = 135.3;
		return t;
	};
	_proto.t_shi_i = function () {
		var t = new eui.Label();
		this.t_shi = t;
		t.bold = true;
		t.name = "t_shi";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0xcae9ff;
		t.text = "全";
		t.textColor = 0x7479db;
		t.x = 192.12;
		t.y = 162.98;
		return t;
	};
	_proto.t_zhuang_i = function () {
		var t = new eui.Label();
		this.t_zhuang = t;
		t.bold = true;
		t.name = "t_zhuang";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0xcae9ff;
		t.text = "部";
		t.textColor = 0x7479db;
		t.x = 238;
		t.y = 164.08;
		return t;
	};
	_proto.btn_one_lb_i = function () {
		var t = new eui.Label();
		this.btn_one_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78.58;
		t.name = "btn_one_lb";
		t.text = "";
		t.width = 160.52;
		t.x = 143.88;
		t.y = 139.79;
		return t;
	};
	_proto.btn_paopao_i = function () {
		var t = new eui.Image();
		this.btn_paopao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.09;
		t.name = "btn_paopao";
		t.source = "rank_select_01_png";
		t.width = 163.42;
		t.x = 143.53;
		t.y = 234.5;
		return t;
	};
	_proto.t_pao1_i = function () {
		var t = new eui.Label();
		this.t_pao1 = t;
		t.bold = true;
		t.name = "t_pao1";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x7b86bb;
		t.text = "普";
		t.textColor = 0xa0b3dc;
		t.x = 189.48;
		t.y = 258.18;
		return t;
	};
	_proto.t_pao2_i = function () {
		var t = new eui.Label();
		this.t_pao2 = t;
		t.bold = true;
		t.name = "t_pao2";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x7b86bb;
		t.text = "通";
		t.textColor = 0xa0b3dc;
		t.x = 235.36;
		t.y = 259.28;
		return t;
	};
	_proto.btn_two_lb_i = function () {
		var t = new eui.Label();
		this.btn_two_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.58;
		t.name = "btn_two_lb";
		t.text = "";
		t.width = 164.52;
		t.x = 141.24;
		t.y = 238.99;
		return t;
	};
	_proto.btn_texiao_i = function () {
		var t = new eui.Image();
		this.btn_texiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.09;
		t.name = "btn_texiao";
		t.source = "rank_select_01_png";
		t.width = 163.42;
		t.x = 142.89;
		t.y = 332.22;
		return t;
	};
	_proto.t_te_i = function () {
		var t = new eui.Label();
		this.t_te = t;
		t.bold = true;
		t.name = "t_te";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x7b86bb;
		t.text = "泡";
		t.textColor = 0xa0b3dc;
		t.x = 190.84;
		t.y = 359.9;
		return t;
	};
	_proto.t_xiao_i = function () {
		var t = new eui.Label();
		this.t_xiao = t;
		t.bold = true;
		t.name = "t_xiao";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x7b86bb;
		t.text = "泡";
		t.textColor = 0xa0b3dc;
		t.x = 236.72;
		t.y = 359;
		return t;
	};
	_proto.btn_three_lb_i = function () {
		var t = new eui.Label();
		this.btn_three_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.58;
		t.name = "btn_three_lb";
		t.text = "";
		t.width = 172.52;
		t.x = 132.6;
		t.y = 336.71;
		return t;
	};
	_proto.btn_daoju_i = function () {
		var t = new eui.Image();
		this.btn_daoju = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.09;
		t.name = "btn_daoju";
		t.source = "rank_select_01_png";
		t.width = 163.42;
		t.x = 145.77;
		t.y = 430.4;
		return t;
	};
	_proto.t_dao_i = function () {
		var t = new eui.Label();
		this.t_dao = t;
		t.bold = true;
		t.name = "t_dao";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x7b86bb;
		t.text = "特";
		t.textColor = 0xa0b3dc;
		t.x = 187.72;
		t.y = 456.08;
		return t;
	};
	_proto.t_ju_i = function () {
		var t = new eui.Label();
		this.t_ju = t;
		t.bold = true;
		t.name = "t_ju";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x7b86bb;
		t.text = "效";
		t.textColor = 0xa0b3dc;
		t.x = 235.6;
		t.y = 457.18;
		return t;
	};
	_proto.btn_four_lb_i = function () {
		var t = new eui.Label();
		this.btn_four_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.58;
		t.name = "btn_four_lb";
		t.text = "";
		t.width = 170.52;
		t.x = 135.48;
		t.y = 434.89;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 37.33;
		t.height = 82.91;
		t.label = "";
		t.name = "btn_close";
		t.width = 79.76;
		t.x = 1228.26;
		t.y = 110.55;
		t.skinName = LoginUI$Skin1;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 535.16;
		t.scale9Grid = new egret.Rectangle(11,9,109,112);
		t.source = "bag_bg_1_png";
		t.width = 288.18;
		t.x = 900.29;
		t.y = 136.78;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 235.15;
		t.scale9Grid = new egret.Rectangle(10,10,128,132);
		t.source = "bag_bg_2_png";
		t.width = 253.34;
		t.x = 917.73;
		t.y = 154.76;
		return t;
	};
	_proto.shop_show_info_i = function () {
		var t = new eui.Label();
		this.shop_show_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 177.33;
		t.lineSpacing = 6;
		t.name = "shop_show_info";
		t.size = 28;
		t.text = "商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述";
		t.textAlign = "left";
		t.textColor = 0x7479db;
		t.verticalAlign = "middle";
		t.width = 252.8;
		t.x = 922.29;
		t.y = 399.78;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.label = "";
		t.width = 164;
		t.x = 963.03;
		t.y = 589.61;
		t.skinName = LoginUI$Skin2;
		return t;
	};
	_proto.shop_show_icon_i = function () {
		var t = new eui.Image();
		this.shop_show_icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 215.45;
		t.name = "shop_show_icon";
		t.source = "mini_weili";
		t.width = 215.45;
		t.x = 938.29;
		t.y = 164.3;
		return t;
	};
	_proto.btn_buy_i = function () {
		var t = new eui.Label();
		this.btn_buy = t;
		t.anchorOffsetX = 77.33;
		t.anchorOffsetY = 30.67;
		t.height = 64;
		t.name = "btn_buy";
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0xf47b33;
		t.text = "使   用";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 1045.33;
		t.y = 624.67;
		return t;
	};
	_proto.img_coin_bg_i = function () {
		var t = new eui.Image();
		this.img_coin_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "img_coin_bg";
		t.source = "mini_own";
		t.width = 129.33;
		t.x = 684.68;
		t.y = 31.54;
		return t;
	};
	_proto.img_zuan_bg_i = function () {
		var t = new eui.Image();
		this.img_zuan_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "img_zuan_bg";
		t.source = "mini_own";
		t.width = 124;
		t.x = 961.39;
		t.y = 31.54;
		return t;
	};
	_proto.btn_noticetip_i = function () {
		var t = new eui.Button();
		this.btn_noticetip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.label = "";
		t.name = "btn_noticetip";
		t.width = 46;
		t.x = 935.61;
		t.y = 22.64;
		t.skinName = LoginUI$Skin3;
		return t;
	};
	_proto.btn_shop3_i = function () {
		var t = new eui.Button();
		this.btn_shop3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.label = "";
		t.name = "btn_shop";
		t.width = 46;
		t.x = 651.52;
		t.y = 22.64;
		t.skinName = LoginUI$Skin4;
		return t;
	};
	_proto.coin_num_lb_i = function () {
		var t = new eui.Label();
		this.coin_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "coin_num_lb";
		t.size = 26;
		t.text = "1234567";
		t.textAlign = "right";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 103.51;
		t.x = 703.41;
		t.y = 34.21;
		return t;
	};
	_proto.zuan_num_lb_i = function () {
		var t = new eui.Label();
		this.zuan_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.name = "zuan_num_lb";
		t.size = 26;
		t.text = "1234567";
		t.textAlign = "right";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 107;
		t.x = 971.56;
		t.y = 34.88;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Cargo_success.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	var NoticeGroup$Skin5 = 	(function (_super) {
		__extends(NoticeGroup$Skin5, _super);
		function NoticeGroup$Skin5() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin5.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin5;
	})(eui.Skin);

	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["merge_fail_confirm","btn_shop0"];
		
		this.height = 626;
		this.width = 747;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.merge_fail_confirm_i(),this._Image4_i(),this.btn_shop0_i(),this._Label1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 446;
		t.source = "bar_info_di_23_png";
		t.width = 509;
		t.x = 111;
		t.y = 104;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 324;
		t.source = "pic_win_png";
		t.width = 678;
		t.x = 62.5;
		t.y = 3;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.source = "btn_info1_png";
		t.width = 147;
		t.x = 311.6;
		t.y = 433.06;
		return t;
	};
	_proto.merge_fail_confirm_i = function () {
		var t = new eui.Image();
		this.merge_fail_confirm = t;
		t.height = 28;
		t.name = "merge_fail_confirm";
		t.source = "icon_confirm_png";
		t.width = 123;
		t.x = 322.6;
		t.y = 446.06;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.source = "Rewards_2_png";
		t.width = 190;
		t.x = 297.04;
		t.y = 289;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 329.6;
		t.y = 361.46;
		t.skinName = NoticeGroup$Skin5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.italic = true;
		t.text = "+ 5";
		t.textColor = 0x5dc916;
		t.x = 380.5;
		t.y = 360.4;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/CommonTips.exml'] = window.CommonTips = (function (_super) {
	__extends(CommonTips, _super);
	function CommonTips() {
		_super.call(this);
		this.skinParts = ["lb_tips_txt"];
		
		this.height = 93;
		this.width = 415;
		this.elementsContent = [this._Image1_i(),this.lb_tips_txt_i()];
	}
	var _proto = CommonTips.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.scale9Grid = new egret.Rectangle(15,5,102,36);
		t.source = "vs_kuang_1v1_png";
		t.width = 438;
		t.x = -11.5;
		t.y = 9;
		return t;
	};
	_proto.lb_tips_txt_i = function () {
		var t = new eui.Label();
		this.lb_tips_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.name = "lb_tips_txt";
		t.text = "提示提示提示提示";
		t.textAlign = "center";
		t.textColor = 0x2acbed;
		t.verticalAlign = "middle";
		t.width = 357;
		t.x = 26;
		t.y = 14;
		return t;
	};
	return CommonTips;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/EditUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin6 = 	(function (_super) {
		__extends(LoginUI$Skin6, _super);
		function LoginUI$Skin6() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin6.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin6;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_close_edit","lb_edit_title","btn_confirm_modify","lb_desc","account_lb_txt"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_close_edit_i(),this.lb_edit_title_i(),this.btn_confirm_modify_i(),this.lb_desc_i(),this.account_lb_txt_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 752.12;
		t.source = "topmask_png";
		t.width = 1332.97;
		t.x = 0;
		t.y = -2.51;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 248;
		t.source = "fighting_result_png";
		t.width = 522;
		t.x = 407.61;
		t.y = 231.67;
		return t;
	};
	_proto.btn_close_edit_i = function () {
		var t = new eui.Button();
		this.btn_close_edit = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 33;
		t.height = 67.33;
		t.label = "";
		t.name = "btn_close_edit";
		t.width = 68.33;
		t.x = 930.45;
		t.y = 237.33;
		t.skinName = LoginUI$Skin6;
		return t;
	};
	_proto.lb_edit_title_i = function () {
		var t = new eui.Label();
		this.lb_edit_title = t;
		t.name = "lb_edit_title";
		t.size = 35;
		t.text = "注册";
		t.textColor = 0xefba1c;
		t.x = 636.61;
		t.y = 250.63;
		return t;
	};
	_proto.btn_confirm_modify_i = function () {
		var t = new eui.Button();
		this.btn_confirm_modify = t;
		t.anchorOffsetX = 52;
		t.anchorOffsetY = 24;
		t.height = 44;
		t.label = "确定";
		t.name = "btn_confirm_modify";
		t.width = 102;
		t.x = 671.61;
		t.y = 453.17;
		return t;
	};
	_proto.lb_desc_i = function () {
		var t = new eui.Label();
		this.lb_desc = t;
		t.name = "lb_desc";
		t.size = 30;
		t.text = "手机号码：";
		t.textColor = 0xcc961a;
		t.x = 465.73;
		t.y = 377.66;
		return t;
	};
	_proto.account_lb_txt_i = function () {
		var t = new eui.TextInput();
		this.account_lb_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "account_lb_txt";
		t.width = 225.99;
		t.x = 608.62;
		t.y = 377.67;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/FightGuanKaResultUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin7 = 	(function (_super) {
		__extends(LoginUI$Skin7, _super);
		function LoginUI$Skin7() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin7.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin7;
	})(eui.Skin);

	var LoginUI$Skin8 = 	(function (_super) {
		__extends(LoginUI$Skin8, _super);
		function LoginUI$Skin8() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","next_barr_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin8.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "next_barr_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin8;
	})(eui.Skin);

	var LoginUI$Skin9 = 	(function (_super) {
		__extends(LoginUI$Skin9, _super);
		function LoginUI$Skin9() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","replay_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin9.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "replay_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin9;
	})(eui.Skin);

	var LoginUI$Skin10 = 	(function (_super) {
		__extends(LoginUI$Skin10, _super);
		function LoginUI$Skin10() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","share_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin10.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "share_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin10;
	})(eui.Skin);

	var LoginUI$Skin11 = 	(function (_super) {
		__extends(LoginUI$Skin11, _super);
		function LoginUI$Skin11() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","backhall_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin11.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backhall_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin11;
	})(eui.Skin);

	var LoginUI$Skin12 = 	(function (_super) {
		__extends(LoginUI$Skin12, _super);
		function LoginUI$Skin12() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","backhall_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin12.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backhall_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin12;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["win_title_img","replay_btn_guanka","replay_fail_btn_guanka","share_btn","goback_btn","goback_fail_btn","name_bg_img","star_01","star_02","star_03","lb_guanka","gold_lb","gold_lb0","gold_add_img_01","gold_add_img_02","gold_add_img_03","exp_add_img_01","exp_add_img_02","exp_add_img_03"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Button1_i(),this.win_title_img_i(),this.replay_btn_guanka_i(),this.replay_fail_btn_guanka_i(),this.share_btn_i(),this.goback_btn_i(),this.goback_fail_btn_i(),this.name_bg_img_i(),this.star_01_i(),this.star_02_i(),this.star_03_i(),this.lb_guanka_i(),this._Image2_i(),this.gold_lb_i(),this.gold_lb0_i(),this._Image3_i(),this._Image4_i(),this.gold_add_img_01_i(),this.gold_add_img_02_i(),this.gold_add_img_03_i(),this.exp_add_img_01_i(),this.exp_add_img_02_i(),this.exp_add_img_03_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 455.18;
		t.source = "fighting_result_png";
		t.width = 808.88;
		t.x = 267.9;
		t.y = 174.95;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 135.33;
		t.label = "";
		t.name = "btn_close";
		t.visible = false;
		t.width = 134.33;
		t.x = 1087.84;
		t.y = 19.83;
		t.skinName = LoginUI$Skin7;
		return t;
	};
	_proto.win_title_img_i = function () {
		var t = new eui.Image();
		this.win_title_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 206;
		t.name = "win_title_img";
		t.source = "win_png";
		t.width = 634;
		t.x = 369.09;
		t.y = 18.23;
		return t;
	};
	_proto.replay_btn_guanka_i = function () {
		var t = new eui.Button();
		this.replay_btn_guanka = t;
		t.anchorOffsetX = 96;
		t.anchorOffsetY = 39;
		t.height = 79.28;
		t.label = "";
		t.name = "replay_btn_guanka";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190.24;
		t.x = 668.78;
		t.y = 567.98;
		t.skinName = LoginUI$Skin8;
		return t;
	};
	_proto.replay_fail_btn_guanka_i = function () {
		var t = new eui.Button();
		this.replay_fail_btn_guanka = t;
		t.anchorOffsetX = 95;
		t.anchorOffsetY = 40;
		t.height = 79.28;
		t.label = "";
		t.name = "replay_fail_btn_guanka";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190.24;
		t.x = 416.27;
		t.y = 570.5;
		t.skinName = LoginUI$Skin9;
		return t;
	};
	_proto.share_btn_i = function () {
		var t = new eui.Button();
		this.share_btn = t;
		t.anchorOffsetX = 97;
		t.anchorOffsetY = 40;
		t.height = 79.28;
		t.label = "";
		t.name = "share_btn";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190.24;
		t.x = 418.42;
		t.y = 568.98;
		t.skinName = LoginUI$Skin10;
		return t;
	};
	_proto.goback_btn_i = function () {
		var t = new eui.Button();
		this.goback_btn = t;
		t.anchorOffsetX = 96;
		t.anchorOffsetY = 38;
		t.height = 79.28;
		t.label = "";
		t.name = "goback_btn";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190.24;
		t.x = 919.96;
		t.y = 566.98;
		t.skinName = LoginUI$Skin11;
		return t;
	};
	_proto.goback_fail_btn_i = function () {
		var t = new eui.Button();
		this.goback_fail_btn = t;
		t.anchorOffsetX = 96;
		t.anchorOffsetY = 39;
		t.height = 79.28;
		t.label = "";
		t.name = "goback_fail_btn";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 190.24;
		t.x = 919.96;
		t.y = 569.5;
		t.skinName = LoginUI$Skin12;
		return t;
	};
	_proto.name_bg_img_i = function () {
		var t = new eui.Image();
		this.name_bg_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58.97;
		t.name = "name_bg_img";
		t.scale9Grid = new egret.Rectangle(22,4,132,49);
		t.source = "name_bg_png";
		t.width = 179.88;
		t.x = 577.34;
		t.y = 200.79;
		return t;
	};
	_proto.star_01_i = function () {
		var t = new eui.Image();
		this.star_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 185;
		t.name = "star_01";
		t.source = "start_02_png";
		t.width = 154;
		t.x = 422.53;
		t.y = 236.31;
		return t;
	};
	_proto.star_02_i = function () {
		var t = new eui.Image();
		this.star_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 185;
		t.name = "star_02";
		t.source = "start_02_png";
		t.width = 154;
		t.x = 588.19;
		t.y = 263.31;
		return t;
	};
	_proto.star_03_i = function () {
		var t = new eui.Image();
		this.star_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 185;
		t.name = "star_03";
		t.source = "start_02_png";
		t.width = 154;
		t.x = 754.36;
		t.y = 236.31;
		return t;
	};
	_proto.lb_guanka_i = function () {
		var t = new eui.Label();
		this.lb_guanka = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 62.06;
		t.name = "lb_guanka";
		t.size = 40;
		t.text = "第10关";
		t.textAlign = "center";
		t.textColor = 0xf4fcf7;
		t.verticalAlign = "middle";
		t.width = 202;
		t.x = 567.22;
		t.y = 199.25;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mini_coin";
		t.width = 86;
		t.x = 447.93;
		t.y = 446.93;
		return t;
	};
	_proto.gold_lb_i = function () {
		var t = new eui.Label();
		this.gold_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.name = "gold_lb";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.size = 40;
		t.text = "金币";
		t.textAlign = "center";
		t.textColor = 0x0f0202;
		t.verticalAlign = "middle";
		t.width = 113;
		t.x = 500.05;
		t.y = 453.17;
		return t;
	};
	_proto.gold_lb0_i = function () {
		var t = new eui.Label();
		this.gold_lb0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.name = "gold_lb";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.size = 40;
		t.text = "经验值";
		t.textAlign = "center";
		t.textColor = 0x0f0202;
		t.verticalAlign = "middle";
		t.width = 147;
		t.x = 694.34;
		t.y = 451.65;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_1_json.+";
		t.width = 42;
		t.x = 590.9;
		t.y = 457.39;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_2_json.+";
		t.width = 42;
		t.x = 811.36;
		t.y = 455.85;
		return t;
	};
	_proto.gold_add_img_01_i = function () {
		var t = new eui.Image();
		this.gold_add_img_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_01";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_1_json.4";
		t.width = 40;
		t.x = 618.7;
		t.y = 457.39;
		return t;
	};
	_proto.gold_add_img_02_i = function () {
		var t = new eui.Image();
		this.gold_add_img_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_02";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_1_json.4";
		t.width = 40;
		t.x = 643.54;
		t.y = 457.39;
		return t;
	};
	_proto.gold_add_img_03_i = function () {
		var t = new eui.Image();
		this.gold_add_img_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_03";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_1_json.7";
		t.width = 40;
		t.x = 665.9;
		t.y = 457.39;
		return t;
	};
	_proto.exp_add_img_01_i = function () {
		var t = new eui.Image();
		this.exp_add_img_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_01";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_2_json.1";
		t.width = 40;
		t.x = 838.68;
		t.y = 454.77;
		return t;
	};
	_proto.exp_add_img_02_i = function () {
		var t = new eui.Image();
		this.exp_add_img_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_02";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_2_json.4";
		t.width = 40;
		t.x = 859;
		t.y = 454.77;
		return t;
	};
	_proto.exp_add_img_03_i = function () {
		var t = new eui.Image();
		this.exp_add_img_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_03";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_2_json.7";
		t.width = 40;
		t.x = 881.36;
		t.y = 454.77;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/FightInfoGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	var NoticeGroup$Skin13 = 	(function (_super) {
		__extends(NoticeGroup$Skin13, _super);
		function NoticeGroup$Skin13() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin13.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_heart";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin13;
	})(eui.Skin);

	var NoticeGroup$Skin14 = 	(function (_super) {
		__extends(NoticeGroup$Skin14, _super);
		function NoticeGroup$Skin14() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin14.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_speed";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin14;
	})(eui.Skin);

	var NoticeGroup$Skin15 = 	(function (_super) {
		__extends(NoticeGroup$Skin15, _super);
		function NoticeGroup$Skin15() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin15.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_boom";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin15;
	})(eui.Skin);

	var NoticeGroup$Skin16 = 	(function (_super) {
		__extends(NoticeGroup$Skin16, _super);
		function NoticeGroup$Skin16() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin16.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_weili";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin16;
	})(eui.Skin);

	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["img_coin_bg","btn_heart","heart_num_lb","img_coin_bg0","btn_speed","spead_num_lb","img_coin_bg1","btn_boom","boom_num_lb","img_coin_bg2","btn_power","fire_num_lb","group_1"];
		
		this.height = 313;
		this.width = 508;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 292;
		t.name = "group_1";
		t.width = 491;
		t.x = 9;
		t.y = 9;
		t.elementsContent = [this.img_coin_bg_i(),this.btn_heart_i(),this.heart_num_lb_i(),this.img_coin_bg0_i(),this.btn_speed_i(),this.spead_num_lb_i(),this.img_coin_bg1_i(),this.btn_boom_i(),this.boom_num_lb_i(),this.img_coin_bg2_i(),this.btn_power_i(),this.fire_num_lb_i(),this._Image1_i()];
		return t;
	};
	_proto.img_coin_bg_i = function () {
		var t = new eui.Image();
		this.img_coin_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "img_coin_bg";
		t.source = "mini_own";
		t.width = 127;
		t.x = 185;
		t.y = 35;
		return t;
	};
	_proto.btn_heart_i = function () {
		var t = new eui.Button();
		this.btn_heart = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_heart";
		t.width = 58;
		t.x = 156;
		t.y = 26;
		t.skinName = NoticeGroup$Skin13;
		return t;
	};
	_proto.heart_num_lb_i = function () {
		var t = new eui.Label();
		this.heart_num_lb = t;
		t.anchorOffsetX = 36.45;
		t.anchorOffsetY = 14;
		t.name = "heart_num_lb";
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 253.45;
		t.y = 56;
		return t;
	};
	_proto.img_coin_bg0_i = function () {
		var t = new eui.Image();
		this.img_coin_bg0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "img_coin_bg";
		t.source = "mini_own";
		t.width = 127;
		t.x = 187.5;
		t.y = 109;
		return t;
	};
	_proto.btn_speed_i = function () {
		var t = new eui.Button();
		this.btn_speed = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_speed";
		t.width = 58;
		t.x = 158.5;
		t.y = 100;
		t.skinName = NoticeGroup$Skin14;
		return t;
	};
	_proto.spead_num_lb_i = function () {
		var t = new eui.Label();
		this.spead_num_lb = t;
		t.anchorOffsetX = 37.04;
		t.anchorOffsetY = 15;
		t.name = "spead_num_lb";
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 73;
		t.x = 258.54;
		t.y = 131;
		return t;
	};
	_proto.img_coin_bg1_i = function () {
		var t = new eui.Image();
		this.img_coin_bg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "img_coin_bg";
		t.source = "mini_own";
		t.width = 127;
		t.x = 189.5;
		t.y = 178;
		return t;
	};
	_proto.btn_boom_i = function () {
		var t = new eui.Button();
		this.btn_boom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_boom";
		t.width = 60;
		t.x = 155.5;
		t.y = 169;
		t.skinName = NoticeGroup$Skin15;
		return t;
	};
	_proto.boom_num_lb_i = function () {
		var t = new eui.Label();
		this.boom_num_lb = t;
		t.anchorOffsetX = 37.55;
		t.anchorOffsetY = 14;
		t.name = "boom_num_lb";
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 258.05;
		t.y = 199;
		return t;
	};
	_proto.img_coin_bg2_i = function () {
		var t = new eui.Image();
		this.img_coin_bg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "img_coin_bg";
		t.source = "mini_own";
		t.width = 127;
		t.x = 187.5;
		t.y = 248;
		return t;
	};
	_proto.btn_power_i = function () {
		var t = new eui.Button();
		this.btn_power = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_power";
		t.width = 58;
		t.x = 161.5;
		t.y = 239;
		t.skinName = NoticeGroup$Skin16;
		return t;
	};
	_proto.fire_num_lb_i = function () {
		var t = new eui.Label();
		this.fire_num_lb = t;
		t.anchorOffsetX = 39.07;
		t.anchorOffsetY = 14;
		t.name = "fire_num_lb";
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 77;
		t.x = 259.57;
		t.y = 269;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "match_art_lb_png";
		t.visible = false;
		t.width = 214;
		t.x = 138;
		t.y = 14;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/fightingUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin17 = 	(function (_super) {
		__extends(LoginUI$Skin17, _super);
		function LoginUI$Skin17() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","boom_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin17.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "boom_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin17;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","ground_layer","map_layer","bullet_layer","player_layer","fighting_parent","boom_btn","controler_hit_btn","controler_parent","test","skill_01","skill_02","skill_01_cd","skill_02_cd"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_parent_i(),this.boom_btn_i(),this.controler_parent_i(),this.test_i(),this._Image2_i(),this.skill_01_i(),this._Image3_i(),this.skill_02_i(),this.skill_01_cd_i(),this.skill_02_cd_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_parent_i = function () {
		var t = new eui.Group();
		this.fighting_parent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 770;
		t.name = "fighting_parent";
		t.width = 974;
		t.x = 125.4;
		t.y = -26;
		t.elementsContent = [this.fighting_platform_i(),this.ground_layer_i(),this.map_layer_i(),this.bullet_layer_i(),this.player_layer_i()];
		return t;
	};
	_proto.fighting_platform_i = function () {
		var t = new eui.Image();
		this.fighting_platform = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 653.88;
		t.name = "fighting_platform";
		t.scale9Grid = new egret.Rectangle(29,29,143,143);
		t.source = "fighting_kuang_png";
		t.width = 823.7;
		t.x = 124;
		t.y = 95.56;
		return t;
	};
	_proto.ground_layer_i = function () {
		var t = new eui.Group();
		this.ground_layer = t;
		t.height = 200;
		t.name = "ground_layer";
		t.width = 200;
		t.x = 26;
		t.y = 30;
		return t;
	};
	_proto.map_layer_i = function () {
		var t = new eui.Group();
		this.map_layer = t;
		t.height = 200;
		t.name = "map_layer";
		t.width = 200;
		t.x = 26;
		t.y = 40;
		return t;
	};
	_proto.bullet_layer_i = function () {
		var t = new eui.Group();
		this.bullet_layer = t;
		t.height = 200;
		t.name = "bullet_layer";
		t.width = 200;
		t.x = 26;
		t.y = 30;
		return t;
	};
	_proto.player_layer_i = function () {
		var t = new eui.Group();
		this.player_layer = t;
		t.height = 200;
		t.name = "player_layer";
		t.width = 200;
		t.x = 26;
		t.y = 30;
		return t;
	};
	_proto.boom_btn_i = function () {
		var t = new eui.Button();
		this.boom_btn = t;
		t.height = 218;
		t.label = "";
		t.name = "boom_btn";
		t.width = 218;
		t.x = 1099.4;
		t.y = 462.36;
		t.skinName = LoginUI$Skin17;
		return t;
	};
	_proto.controler_parent_i = function () {
		var t = new eui.Group();
		this.controler_parent = t;
		t.anchorOffsetY = 0;
		t.height = 582;
		t.name = "controler_parent";
		t.touchThrough = false;
		t.width = 400;
		t.x = 5.32;
		t.y = 237.81;
		t.elementsContent = [this._Image1_i(),this.controler_hit_btn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 208;
		t.source = "controler_bg_png";
		t.touchEnabled = false;
		t.width = 208;
		t.x = 28;
		t.y = 184;
		return t;
	};
	_proto.controler_hit_btn_i = function () {
		var t = new eui.Image();
		this.controler_hit_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 208;
		t.name = "controler_hit_btn";
		t.source = "controler_hit_png";
		t.touchEnabled = false;
		t.width = 208;
		t.x = 28;
		t.y = 183;
		return t;
	};
	_proto.test_i = function () {
		var t = new eui.Button();
		this.test = t;
		t.label = "重置引导";
		t.name = "test";
		t.visible = false;
		t.x = 1129;
		t.y = 83;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "skill_item_kuang_png";
		t.width = 82;
		t.x = 1187.4;
		t.y = 214.66;
		return t;
	};
	_proto.skill_01_i = function () {
		var t = new eui.Image();
		this.skill_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.name = "skill_01";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "skill_dog_nn_png";
		t.width = 68;
		t.x = 1197.4;
		t.y = 225.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "skill_item_kuang_png";
		t.width = 82;
		t.x = 1095.4;
		t.y = 340.86;
		return t;
	};
	_proto.skill_02_i = function () {
		var t = new eui.Image();
		this.skill_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.name = "skill_02";
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "skill_chicken_nn_png";
		t.width = 68;
		t.x = 1106.4;
		t.y = 351.36;
		return t;
	};
	_proto.skill_01_cd_i = function () {
		var t = new eui.Label();
		this.skill_01_cd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97;
		t.name = "skill_01_cd";
		t.text = "30";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 85;
		t.x = 1206.4;
		t.y = 227.5;
		return t;
	};
	_proto.skill_02_cd_i = function () {
		var t = new eui.Label();
		this.skill_02_cd = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 97;
		t.name = "skill_02_cd";
		t.text = "30";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 85;
		t.x = 1114.4;
		t.y = 356.36;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/FightingVsMiniGameUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	function LoginUI() {
		_super.call(this);
		this.skinParts = ["match_tip","my_click_num_lb","match_tip3","other_click_num_lb","time_countdown","giveup_btn","click_btn","use_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.match_tip_i(),this.my_click_num_lb_i(),this.match_tip3_i(),this.other_click_num_lb_i(),this.time_countdown_i(),this.giveup_btn_i(),this.click_btn_i(),this.use_btn_i(),this._CheckBox1_i(),this._CheckBox2_i(),this._CheckBox3_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.match_tip_i = function () {
		var t = new eui.Label();
		this.match_tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "match_tip";
		t.size = 44;
		t.text = "争夺地图使用权";
		t.textColor = 0x0c0f19;
		t.width = 326.67;
		t.x = 477.3;
		t.y = 42;
		return t;
	};
	_proto.my_click_num_lb_i = function () {
		var t = new eui.Label();
		this.my_click_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "my_click_num_lb";
		t.size = 44;
		t.text = "";
		t.textColor = 0x0C0F19;
		t.width = 244;
		t.x = 100.67;
		t.y = 110;
		return t;
	};
	_proto.match_tip3_i = function () {
		var t = new eui.Label();
		this.match_tip3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "match_tip";
		t.size = 44;
		t.text = "目标：";
		t.textColor = 0x0C0F19;
		t.width = 244;
		t.x = 20;
		t.y = 182.67;
		return t;
	};
	_proto.other_click_num_lb_i = function () {
		var t = new eui.Label();
		this.other_click_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.name = "other_click_num_lb";
		t.size = 44;
		t.text = "";
		t.textColor = 0x0C0F19;
		t.width = 244;
		t.x = 1072;
		t.y = 110;
		return t;
	};
	_proto.time_countdown_i = function () {
		var t = new eui.Label();
		this.time_countdown = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 114;
		t.name = "time_countdown";
		t.size = 60;
		t.text = "3";
		t.textAlign = "center";
		t.textColor = 0x0C0F19;
		t.verticalAlign = "middle";
		t.width = 108;
		t.x = 586.63;
		t.y = 135;
		return t;
	};
	_proto.giveup_btn_i = function () {
		var t = new eui.Button();
		this.giveup_btn = t;
		t.anchorOffsetX = 0;
		t.label = "认输";
		t.name = "giveup_btn";
		t.width = 126.67;
		t.x = 1100;
		t.y = 325;
		return t;
	};
	_proto.click_btn_i = function () {
		var t = new eui.Button();
		this.click_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 112.67;
		t.label = "点击屏幕";
		t.name = "click_btn";
		t.width = 194.67;
		t.x = 543.3;
		t.y = 378.34;
		return t;
	};
	_proto.use_btn_i = function () {
		var t = new eui.Button();
		this.use_btn = t;
		t.label = "+10 100金币";
		t.name = "use_btn";
		t.x = 1100;
		t.y = 409.67;
		return t;
	};
	_proto._CheckBox1_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.label = "点击50下获得5金币";
		t.width = 269.67;
		t.x = 20;
		t.y = 239.67;
		return t;
	};
	_proto._CheckBox2_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.label = "点击100下获得随机战斗加成";
		t.width = 269.67;
		t.x = 20;
		t.y = 290.67;
		return t;
	};
	_proto._CheckBox3_i = function () {
		var t = new eui.CheckBox();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.label = "夺得选择权，奖励5金币";
		t.width = 269.67;
		t.x = 20;
		t.y = 341.67;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/FightingVsUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin18 = 	(function (_super) {
		__extends(LoginUI$Skin18, _super);
		function LoginUI$Skin18() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","match_exit_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin18.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "match_exit_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin18;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["exit_match","match_tip"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.exit_match_i(),this.match_tip_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.exit_match_i = function () {
		var t = new eui.Button();
		this.exit_match = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.label = "";
		t.name = "exit_match";
		t.scaleX = 1;
		t.scaleY = 1;
		t.visible = false;
		t.width = 182;
		t.x = 603;
		t.y = 588;
		t.skinName = LoginUI$Skin18;
		return t;
	};
	_proto.match_tip_i = function () {
		var t = new eui.Image();
		this.match_tip = t;
		t.height = 64;
		t.name = "match_tip";
		t.source = "match_success_png";
		t.visible = false;
		t.width = 240;
		t.x = 603;
		t.y = 593;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/FightResultUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin19 = 	(function (_super) {
		__extends(LoginUI$Skin19, _super);
		function LoginUI$Skin19() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin19.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin19;
	})(eui.Skin);

	var LoginUI$Skin20 = 	(function (_super) {
		__extends(LoginUI$Skin20, _super);
		function LoginUI$Skin20() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","replay_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin20.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "replay_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin20;
	})(eui.Skin);

	var LoginUI$Skin21 = 	(function (_super) {
		__extends(LoginUI$Skin21, _super);
		function LoginUI$Skin21() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","share_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin21.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "share_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin21;
	})(eui.Skin);

	var LoginUI$Skin22 = 	(function (_super) {
		__extends(LoginUI$Skin22, _super);
		function LoginUI$Skin22() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","backhall_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin22.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backhall_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin22;
	})(eui.Skin);

	var LoginUI$Skin23 = 	(function (_super) {
		__extends(LoginUI$Skin23, _super);
		function LoginUI$Skin23() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","replay_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin23.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "replay_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin23;
	})(eui.Skin);

	var LoginUI$Skin24 = 	(function (_super) {
		__extends(LoginUI$Skin24, _super);
		function LoginUI$Skin24() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","backhall_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin24.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "backhall_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin24;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["left_name_lb","win_title_img","replay_btn","share_btn","goback_btn","replay_fail_btn","goback_fail_btn","right_name_lb","left_head_img","right_head_img","gold_lb","gold_lb0","gold_add_img_01","gold_add_img_02","gold_add_img_03","exp_add_img_01","exp_add_img_02","exp_add_img_03"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.left_name_lb_i(),this._Button1_i(),this.win_title_img_i(),this.replay_btn_i(),this.share_btn_i(),this.goback_btn_i(),this._Image2_i(),this.replay_fail_btn_i(),this.goback_fail_btn_i(),this._Image3_i(),this._Label1_i(),this.right_name_lb_i(),this.left_head_img_i(),this.right_head_img_i(),this._Image4_i(),this.gold_lb_i(),this.gold_lb0_i(),this._Image5_i(),this._Image6_i(),this.gold_add_img_01_i(),this.gold_add_img_02_i(),this.gold_add_img_03_i(),this.exp_add_img_01_i(),this.exp_add_img_02_i(),this.exp_add_img_03_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 468.51;
		t.source = "fighting_result_png";
		t.width = 848.88;
		t.x = 227.37;
		t.y = 166.28;
		return t;
	};
	_proto.left_name_lb_i = function () {
		var t = new eui.Label();
		this.left_name_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 64;
		t.name = "left_name_lb";
		t.size = 40;
		t.text = "我是技安";
		t.textAlign = "center";
		t.textColor = 0xf4ebeb;
		t.verticalAlign = "middle";
		t.width = 322.33;
		t.x = 265.57;
		t.y = 357.63;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 135.33;
		t.label = "";
		t.name = "btn_close";
		t.visible = false;
		t.width = 134.33;
		t.x = 1087.84;
		t.y = 19.83;
		t.skinName = LoginUI$Skin19;
		return t;
	};
	_proto.win_title_img_i = function () {
		var t = new eui.Image();
		this.win_title_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 206;
		t.name = "win_title_img";
		t.source = "win_png";
		t.width = 634;
		t.x = 350;
		t.y = 7.98;
		return t;
	};
	_proto.replay_btn_i = function () {
		var t = new eui.Button();
		this.replay_btn = t;
		t.anchorOffsetX = 95;
		t.anchorOffsetY = 36;
		t.height = 79.28;
		t.label = "";
		t.name = "replay_btn";
		t.width = 190.24;
		t.x = 649.02;
		t.y = 567.44;
		t.skinName = LoginUI$Skin20;
		return t;
	};
	_proto.share_btn_i = function () {
		var t = new eui.Button();
		this.share_btn = t;
		t.anchorOffsetX = 95;
		t.anchorOffsetY = 40;
		t.height = 79.28;
		t.label = "";
		t.name = "share_btn";
		t.width = 190.24;
		t.x = 385.87;
		t.y = 571.44;
		t.skinName = LoginUI$Skin21;
		return t;
	};
	_proto.goback_btn_i = function () {
		var t = new eui.Button();
		this.goback_btn = t;
		t.anchorOffsetX = 96;
		t.anchorOffsetY = 40;
		t.height = 79.28;
		t.label = "";
		t.name = "goback_btn";
		t.width = 190.24;
		t.x = 907.88;
		t.y = 571.44;
		t.skinName = LoginUI$Skin22;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "mini_head";
		t.width = 100;
		t.x = 376.73;
		t.y = 233.41;
		return t;
	};
	_proto.replay_fail_btn_i = function () {
		var t = new eui.Button();
		this.replay_fail_btn = t;
		t.anchorOffsetX = 94;
		t.anchorOffsetY = 37;
		t.height = 79.28;
		t.label = "";
		t.name = "replay_fail_btn";
		t.width = 190.24;
		t.x = 479.99;
		t.y = 568.44;
		t.skinName = LoginUI$Skin23;
		return t;
	};
	_proto.goback_fail_btn_i = function () {
		var t = new eui.Button();
		this.goback_fail_btn = t;
		t.anchorOffsetX = 96;
		t.anchorOffsetY = 38;
		t.height = 79.28;
		t.label = "";
		t.name = "goback_fail_btn";
		t.width = 190.24;
		t.x = 792.45;
		t.y = 569.44;
		t.skinName = LoginUI$Skin24;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "mini_head";
		t.width = 100;
		t.x = 815.57;
		t.y = 233.07;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 57.33;
		t.size = 40;
		t.text = "战胜了";
		t.textAlign = "center";
		t.textColor = 0x3ce881;
		t.verticalAlign = "middle";
		t.width = 188.67;
		t.x = 550.46;
		t.y = 254.75;
		return t;
	};
	_proto.right_name_lb_i = function () {
		var t = new eui.Label();
		this.right_name_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 64;
		t.name = "right_name_lb";
		t.size = 40;
		t.text = "技安他哥他哥";
		t.textAlign = "center";
		t.textColor = 0xf4ebeb;
		t.verticalAlign = "middle";
		t.width = 322.33;
		t.x = 703.39;
		t.y = 351.17;
		return t;
	};
	_proto.left_head_img_i = function () {
		var t = new eui.Image();
		this.left_head_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.34;
		t.name = "left_head_img";
		t.source = "default_head_png";
		t.width = 81.67;
		t.x = 386.39;
		t.y = 242.4;
		return t;
	};
	_proto.right_head_img_i = function () {
		var t = new eui.Image();
		this.right_head_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.34;
		t.name = "right_head_img";
		t.source = "default_head_png";
		t.width = 81.67;
		t.x = 825.22;
		t.y = 241.74;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "mini_coin";
		t.width = 86;
		t.x = 400.82;
		t.y = 445.58;
		return t;
	};
	_proto.gold_lb_i = function () {
		var t = new eui.Label();
		this.gold_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.name = "gold_lb";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.size = 40;
		t.text = "63800";
		t.textAlign = "center";
		t.textColor = 0x0F0202;
		t.verticalAlign = "middle";
		t.width = 113;
		t.x = 452.94;
		t.y = 451.82;
		return t;
	};
	_proto.gold_lb0_i = function () {
		var t = new eui.Label();
		this.gold_lb0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 46;
		t.name = "gold_lb";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.size = 40;
		t.text = "经验值";
		t.textAlign = "center";
		t.textColor = 0x0F0202;
		t.verticalAlign = "middle";
		t.width = 147;
		t.x = 647.23;
		t.y = 450.3;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_1_json.+";
		t.width = 42;
		t.x = 543.79;
		t.y = 456.04;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_2_json.+";
		t.width = 42;
		t.x = 764.25;
		t.y = 454.5;
		return t;
	};
	_proto.gold_add_img_01_i = function () {
		var t = new eui.Image();
		this.gold_add_img_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_01";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_1_json.1";
		t.width = 40;
		t.x = 571.59;
		t.y = 456.04;
		return t;
	};
	_proto.gold_add_img_02_i = function () {
		var t = new eui.Image();
		this.gold_add_img_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_02";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_1_json.4";
		t.width = 40;
		t.x = 593.43;
		t.y = 456.04;
		return t;
	};
	_proto.gold_add_img_03_i = function () {
		var t = new eui.Image();
		this.gold_add_img_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_03";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_1_json.7";
		t.width = 40;
		t.x = 617.79;
		t.y = 456.04;
		return t;
	};
	_proto.exp_add_img_01_i = function () {
		var t = new eui.Image();
		this.exp_add_img_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_01";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_2_json.1";
		t.width = 40;
		t.x = 791.57;
		t.y = 453.42;
		return t;
	};
	_proto.exp_add_img_02_i = function () {
		var t = new eui.Image();
		this.exp_add_img_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_02";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_2_json.4";
		t.width = 40;
		t.x = 812.89;
		t.y = 453.42;
		return t;
	};
	_proto.exp_add_img_03_i = function () {
		var t = new eui.Image();
		this.exp_add_img_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_03";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "digital_2_json.7";
		t.width = 40;
		t.x = 837.25;
		t.y = 453.42;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/GuideTipsGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["tip","group_1"];
		
		this.height = 150;
		this.width = 270;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 270;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.tip_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 149;
		t.source = "guide_showtip_png";
		t.width = 268;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.tip_i = function () {
		var t = new eui.Label();
		this.tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 95;
		t.lineSpacing = 5;
		t.name = "tip";
		t.size = 26;
		t.text = "移动摇杆移动摇杆移动摇杆移动摇杆移动摇杆";
		t.textAlign = "left";
		t.textColor = 0x5d81c5;
		t.verticalAlign = "middle";
		t.width = 233;
		t.x = 19;
		t.y = 16;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/HallUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin25 = 	(function (_super) {
		__extends(LoginUI$Skin25, _super);
		function LoginUI$Skin25() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin25.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin25;
	})(eui.Skin);

	var LoginUI$Skin26 = 	(function (_super) {
		__extends(LoginUI$Skin26, _super);
		function LoginUI$Skin26() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin26.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin26;
	})(eui.Skin);

	var LoginUI$Skin27 = 	(function (_super) {
		__extends(LoginUI$Skin27, _super);
		function LoginUI$Skin27() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin27.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_head";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin27;
	})(eui.Skin);

	var LoginUI$Skin28 = 	(function (_super) {
		__extends(LoginUI$Skin28, _super);
		function LoginUI$Skin28() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin28.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "new_ui_14_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin28;
	})(eui.Skin);

	var LoginUI$Skin29 = 	(function (_super) {
		__extends(LoginUI$Skin29, _super);
		function LoginUI$Skin29() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin29.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "new_ui_12_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin29;
	})(eui.Skin);

	var LoginUI$Skin30 = 	(function (_super) {
		__extends(LoginUI$Skin30, _super);
		function LoginUI$Skin30() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin30.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "new_ui_02_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin30;
	})(eui.Skin);

	var LoginUI$Skin31 = 	(function (_super) {
		__extends(LoginUI$Skin31, _super);
		function LoginUI$Skin31() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin31.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "new_ui_03_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin31;
	})(eui.Skin);

	var LoginUI$Skin32 = 	(function (_super) {
		__extends(LoginUI$Skin32, _super);
		function LoginUI$Skin32() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin32.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "new_ui_13_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin32;
	})(eui.Skin);

	var LoginUI$Skin33 = 	(function (_super) {
		__extends(LoginUI$Skin33, _super);
		function LoginUI$Skin33() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin33.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "default_head_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin33;
	})(eui.Skin);

	var LoginUI$Skin34 = 	(function (_super) {
		__extends(LoginUI$Skin34, _super);
		function LoginUI$Skin34() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin34.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "new_ui_11_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin34;
	})(eui.Skin);

	var LoginUI$Skin35 = 	(function (_super) {
		__extends(LoginUI$Skin35, _super);
		function LoginUI$Skin35() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","gonggao_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin35.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "gonggao_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin35;
	})(eui.Skin);

	var LoginUI$Skin36 = 	(function (_super) {
		__extends(LoginUI$Skin36, _super);
		function LoginUI$Skin36() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin36.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin36;
	})(eui.Skin);

	var LoginUI$Skin37 = 	(function (_super) {
		__extends(LoginUI$Skin37, _super);
		function LoginUI$Skin37() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin37.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_+_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin37;
	})(eui.Skin);

	var LoginUI$Skin38 = 	(function (_super) {
		__extends(LoginUI$Skin38, _super);
		function LoginUI$Skin38() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin38.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin38;
	})(eui.Skin);

	var LoginUI$Skin39 = 	(function (_super) {
		__extends(LoginUI$Skin39, _super);
		function LoginUI$Skin39() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin39.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_+_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin39;
	})(eui.Skin);

	var LoginUI$Skin40 = 	(function (_super) {
		__extends(LoginUI$Skin40, _super);
		function LoginUI$Skin40() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin40.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin40;
	})(eui.Skin);

	var LoginUI$Skin41 = 	(function (_super) {
		__extends(LoginUI$Skin41, _super);
		function LoginUI$Skin41() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin41.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin41;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["main_cloud","rank_head_01","rank_head_01_mask","rank_head_02","rank_head_02_mask","rank_head_03","rank_head_03_mask","rank_head_04","rank_head_04_mask","rank_head_05","rank_head_05_mask","btn_back_img","img_info0","rank_grounp_main","img_coin_bg","img_zuan_bg","btn_noticetip","btn_shop3","coin_num_lb","zuan_num_lb","btn_info","info_grp","img_info","img_exp_bg","img_exp_value","hall_id_lb","img_lv_lb0","img_head_bg","img_lv_lb","btn_map_diy","btn_noend_pve","btn_training_pve","btn_friend_pvp","btn_match_pvp","notity_all_lb_bg","notity_all_lb","group_notify","scroll_notify","btn_gm","btn_2v2","btn_gonggao","horse_lv_bg_mg","img_coin_bg0","btn_shop0","main_coin_num_lb","img_coin1_add","img_zuan_bg0","btn_noticetip0","sub_coin_num_lb","img_coin2_add","horse_lv_img","up_item_group","horse_name_lb","horse_name_group","merge_fail_confirm0","sell_num_lb","sell_btn_lb","up_img","down_img","sell_group","btn_shop1","buy_nft_main","btn_shop2","main_coin_num_lb1","buynft_btn_lb","buynft_group","hall_horse_body"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.main_cloud_i(),this.rank_grounp_main_i(),this.img_coin_bg_i(),this.img_zuan_bg_i(),this.btn_noticetip_i(),this.btn_shop3_i(),this.coin_num_lb_i(),this.zuan_num_lb_i(),this.info_grp_i(),this.img_info_i(),this.img_exp_bg_i(),this.img_exp_value_i(),this.hall_id_lb_i(),this.img_lv_lb0_i(),this.img_head_bg_i(),this.img_lv_lb_i(),this.btn_map_diy_i(),this.btn_noend_pve_i(),this.btn_training_pve_i(),this.btn_friend_pvp_i(),this.btn_match_pvp_i(),this.scroll_notify_i(),this.btn_gm_i(),this.btn_2v2_i(),this.btn_gonggao_i(),this.up_item_group_i(),this.horse_name_group_i(),this.sell_group_i(),this.buynft_group_i(),this.hall_horse_body_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.main_cloud_i = function () {
		var t = new eui.Image();
		this.main_cloud = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 709.33;
		t.name = "main_cloud";
		t.source = "hall_cloud_png";
		t.visible = false;
		t.width = 1332;
		t.x = 0.67;
		t.y = 39;
		return t;
	};
	_proto.rank_grounp_main_i = function () {
		var t = new eui.Group();
		this.rank_grounp_main = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.24;
		t.name = "rank_grounp_main";
		t.width = 86.36;
		t.x = 20;
		t.y = 164;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.rank_head_01_i(),this.rank_head_01_mask_i(),this.rank_head_02_i(),this.rank_head_02_mask_i(),this.rank_head_03_i(),this.rank_head_03_mask_i(),this.rank_head_04_i(),this.rank_head_04_mask_i(),this.rank_head_05_i(),this.rank_head_05_mask_i(),this.btn_back_img_i(),this._Image6_i(),this.img_info0_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 746;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leftbar_di_png";
		t.width = 201;
		t.x = -19.73;
		t.y = -160.36;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mini_head";
		t.visible = false;
		t.width = 84;
		t.x = 21.770000000000003;
		t.y = 77.64;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mini_head";
		t.visible = false;
		t.width = 84;
		t.x = 22.369999999999997;
		t.y = 169.82;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mini_head";
		t.visible = false;
		t.width = 84;
		t.x = 22.369999999999997;
		t.y = 261.23;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "new_ui_16_png";
		t.visible = false;
		t.width = 35;
		t.x = 8;
		t.y = 64.64;
		return t;
	};
	_proto.rank_head_01_i = function () {
		var t = new eui.Image();
		this.rank_head_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "rank_head_01";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_homestead_s_png";
		t.width = 201;
		t.x = -18;
		t.y = -1;
		return t;
	};
	_proto.rank_head_01_mask_i = function () {
		var t = new eui.Image();
		this.rank_head_01_mask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "rank_head_01_mask";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leftbar_s_png";
		t.width = 201;
		t.x = -18;
		t.y = -1;
		return t;
	};
	_proto.rank_head_02_i = function () {
		var t = new eui.Image();
		this.rank_head_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "rank_head_02";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stables_n_png";
		t.width = 201;
		t.x = -18;
		t.y = 98.99;
		return t;
	};
	_proto.rank_head_02_mask_i = function () {
		var t = new eui.Image();
		this.rank_head_02_mask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "rank_head_02_mask";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leftbar_s_png";
		t.visible = false;
		t.width = 201;
		t.x = -18;
		t.y = 98.99;
		return t;
	};
	_proto.rank_head_03_i = function () {
		var t = new eui.Image();
		this.rank_head_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "rank_head_03";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_training_n_png";
		t.width = 201;
		t.x = -18;
		t.y = 198.98;
		return t;
	};
	_proto.rank_head_03_mask_i = function () {
		var t = new eui.Image();
		this.rank_head_03_mask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "rank_head_03_mask";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leftbar_s_png";
		t.visible = false;
		t.width = 201;
		t.x = -18;
		t.y = 198.98;
		return t;
	};
	_proto.rank_head_04_i = function () {
		var t = new eui.Image();
		this.rank_head_04 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "rank_head_04";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_task_n_png";
		t.width = 201;
		t.x = -18;
		t.y = 299.34;
		return t;
	};
	_proto.rank_head_04_mask_i = function () {
		var t = new eui.Image();
		this.rank_head_04_mask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "rank_head_04_mask";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leftbar_s_png";
		t.visible = false;
		t.width = 201;
		t.x = -18;
		t.y = 299.34;
		return t;
	};
	_proto.rank_head_05_i = function () {
		var t = new eui.Image();
		this.rank_head_05 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "rank_head_05";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_marketpalec_n_png";
		t.width = 201;
		t.x = -18;
		t.y = 398.99;
		return t;
	};
	_proto.rank_head_05_mask_i = function () {
		var t = new eui.Image();
		this.rank_head_05_mask = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "rank_head_05_mask";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "leftbar_s_png";
		t.visible = false;
		t.width = 201;
		t.x = -18;
		t.y = 398.99;
		return t;
	};
	_proto.btn_back_img_i = function () {
		var t = new eui.Image();
		this.btn_back_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.name = "btn_back_img";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_back_png";
		t.visible = false;
		t.width = 102;
		t.x = -17.79;
		t.y = 445.41;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "new_ui_18_png";
		t.visible = false;
		t.width = 35;
		t.x = 8.27;
		t.y = 242.82;
		return t;
	};
	_proto.img_info0_i = function () {
		var t = new eui.Image();
		this.img_info0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.name = "img_info";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "pic_logo_png";
		t.width = 201.67;
		t.x = -20.57;
		t.y = -162.42;
		return t;
	};
	_proto.img_coin_bg_i = function () {
		var t = new eui.Image();
		this.img_coin_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.name = "img_coin_bg";
		t.source = "bar_coin_png";
		t.visible = false;
		t.width = 159;
		t.x = 813.7;
		t.y = 35;
		return t;
	};
	_proto.img_zuan_bg_i = function () {
		var t = new eui.Image();
		this.img_zuan_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.name = "img_zuan_bg";
		t.source = "bar_coin_png";
		t.visible = false;
		t.width = 159;
		t.x = 1058.27;
		t.y = 35;
		return t;
	};
	_proto.btn_noticetip_i = function () {
		var t = new eui.Button();
		this.btn_noticetip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_noticetip";
		t.visible = false;
		t.width = 39;
		t.x = 1032.49;
		t.y = 35.1;
		t.skinName = LoginUI$Skin25;
		return t;
	};
	_proto.btn_shop3_i = function () {
		var t = new eui.Button();
		this.btn_shop3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.visible = false;
		t.width = 39;
		t.x = 791.05;
		t.y = 35.1;
		t.skinName = LoginUI$Skin26;
		return t;
	};
	_proto.coin_num_lb_i = function () {
		var t = new eui.Label();
		this.coin_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "coin_num_lb";
		t.size = 26;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf9f2f2;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 130;
		t.x = 826.68;
		t.y = 39.61;
		return t;
	};
	_proto.zuan_num_lb_i = function () {
		var t = new eui.Label();
		this.zuan_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.name = "zuan_num_lb";
		t.size = 26;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xf9f2f2;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 130;
		t.x = 1074.25;
		t.y = 40.34;
		return t;
	};
	_proto.info_grp_i = function () {
		var t = new eui.Group();
		this.info_grp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.name = "info_grp";
		t.visible = false;
		t.width = 52;
		t.x = 30.96;
		t.y = 14;
		t.elementsContent = [this.btn_info_i()];
		return t;
	};
	_proto.btn_info_i = function () {
		var t = new eui.Button();
		this.btn_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "btn_info";
		t.width = 96;
		t.x = -15;
		t.y = -1.5;
		t.skinName = LoginUI$Skin27;
		return t;
	};
	_proto.img_info_i = function () {
		var t = new eui.Image();
		this.img_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 106;
		t.name = "img_info";
		t.source = "pic_logo_png";
		t.visible = false;
		t.width = 201.67;
		t.x = 1.63;
		t.y = 2.93;
		return t;
	};
	_proto.img_exp_bg_i = function () {
		var t = new eui.Image();
		this.img_exp_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45;
		t.name = "img_exp_bg";
		t.source = "bar_level_1_di_png";
		t.visible = false;
		t.width = 226;
		t.x = 258.18;
		t.y = 28.7;
		return t;
	};
	_proto.img_exp_value_i = function () {
		var t = new eui.Image();
		this.img_exp_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35.67;
		t.name = "img_exp_value";
		t.scale9Grid = new egret.Rectangle(4,6,7,27);
		t.source = "bar_level_1_png";
		t.visible = false;
		t.width = 170;
		t.x = 256.02;
		t.y = 33.3;
		return t;
	};
	_proto.hall_id_lb_i = function () {
		var t = new eui.Label();
		this.hall_id_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.name = "hall_id_lb";
		t.size = 26;
		t.strokeColor = 0xc63b3b;
		t.text = "Ferrari";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 207;
		t.x = 1051.99;
		t.y = 607.99;
		return t;
	};
	_proto.img_lv_lb0_i = function () {
		var t = new eui.Label();
		this.img_lv_lb0 = t;
		t.name = "img_lv_lb";
		t.text = "78%";
		t.textColor = 0xF9F2F2;
		t.visible = false;
		t.x = 344.5;
		t.y = 36.8;
		return t;
	};
	_proto.img_head_bg_i = function () {
		var t = new eui.Image();
		this.img_head_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.name = "img_head_bg";
		t.source = "icon_level_png";
		t.visible = false;
		t.width = 48;
		t.x = 220.66;
		t.y = 23.63;
		return t;
	};
	_proto.img_lv_lb_i = function () {
		var t = new eui.Label();
		this.img_lv_lb = t;
		t.name = "img_lv_lb";
		t.text = "B";
		t.textColor = 0xf9f2f2;
		t.visible = false;
		t.x = 235.5;
		t.y = 33.77;
		return t;
	};
	_proto.btn_map_diy_i = function () {
		var t = new eui.Button();
		this.btn_map_diy = t;
		t.anchorOffsetX = 122;
		t.anchorOffsetY = 88;
		t.height = 178;
		t.label = "";
		t.name = "btn_map_diy";
		t.visible = false;
		t.width = 245;
		t.x = 397.74;
		t.y = 248.66;
		t.skinName = LoginUI$Skin28;
		return t;
	};
	_proto.btn_noend_pve_i = function () {
		var t = new eui.Button();
		this.btn_noend_pve = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 469;
		t.label = "";
		t.name = "btn_noend_pvettt";
		t.visible = false;
		t.width = 375;
		t.x = 478.83;
		t.y = 143.67;
		t.skinName = LoginUI$Skin29;
		return t;
	};
	_proto.btn_training_pve_i = function () {
		var t = new eui.Button();
		this.btn_training_pve = t;
		t.anchorOffsetX = 113;
		t.anchorOffsetY = 85;
		t.height = 164;
		t.label = "";
		t.name = "btn_training_pve";
		t.visible = false;
		t.width = 216;
		t.x = 1059.45;
		t.y = 225.5;
		t.skinName = LoginUI$Skin30;
		return t;
	};
	_proto.btn_friend_pvp_i = function () {
		var t = new eui.Button();
		this.btn_friend_pvp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.label = "";
		t.name = "btn_friend_pvpttt";
		t.visible = false;
		t.width = 216;
		t.x = 167.09;
		t.y = 293;
		t.skinName = LoginUI$Skin31;
		return t;
	};
	_proto.btn_match_pvp_i = function () {
		var t = new eui.Button();
		this.btn_match_pvp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 326;
		t.label = "";
		t.name = "btn_match_pvpttt";
		t.visible = false;
		t.width = 239;
		t.x = 852.5;
		t.y = 279;
		t.skinName = LoginUI$Skin32;
		return t;
	};
	_proto.scroll_notify_i = function () {
		var t = new eui.Scroller();
		this.scroll_notify = t;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "scroll_notify";
		t.scaleX = 1;
		t.scaleY = 1.15;
		t.touchChildren = false;
		t.visible = false;
		t.width = 400;
		t.x = 345.03;
		t.y = 76.33;
		t.viewport = this.group_notify_i();
		return t;
	};
	_proto.group_notify_i = function () {
		var t = new eui.Group();
		this.group_notify = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.name = "group_notify";
		t.width = 361.33;
		t.x = 40;
		t.y = 0;
		t.elementsContent = [this.notity_all_lb_bg_i(),this.notity_all_lb_i()];
		return t;
	};
	_proto.notity_all_lb_bg_i = function () {
		var t = new eui.Image();
		this.notity_all_lb_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.name = "notity_all_lb_bg";
		t.scale9Grid = new egret.Rectangle(3,3,390,30);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "notify_bg_png";
		t.width = 393;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.notity_all_lb_i = function () {
		var t = new eui.Label();
		this.notity_all_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.33;
		t.name = "notity_all_lb";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 16;
		t.text = "喜迎新春，新春开服，福利多多，大家快来体验吧~";
		t.textAlign = "center";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 393;
		t.x = 5.13;
		t.y = 8.55;
		return t;
	};
	_proto.btn_gm_i = function () {
		var t = new eui.Button();
		this.btn_gm = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.07;
		t.label = "";
		t.name = "btn_gm";
		t.visible = false;
		t.width = 49;
		t.x = 8.73;
		t.y = 587.14;
		t.skinName = LoginUI$Skin33;
		return t;
	};
	_proto.btn_2v2_i = function () {
		var t = new eui.Button();
		this.btn_2v2 = t;
		t.anchorOffsetX = 82;
		t.anchorOffsetY = 74;
		t.height = 151.43;
		t.label = "";
		t.name = "btn_2v2";
		t.visible = false;
		t.width = 167.94;
		t.x = 417.65;
		t.y = 527.57;
		t.skinName = LoginUI$Skin34;
		return t;
	};
	_proto.btn_gonggao_i = function () {
		var t = new eui.Button();
		this.btn_gonggao = t;
		t.height = 84;
		t.label = "";
		t.name = "btn_gonggao";
		t.visible = false;
		t.width = 84;
		t.x = 290.5;
		t.y = 592;
		t.skinName = LoginUI$Skin35;
		return t;
	};
	_proto.up_item_group_i = function () {
		var t = new eui.Group();
		this.up_item_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.name = "up_item_group";
		t.width = 1010;
		t.x = 324.52;
		t.y = -11.66;
		t.elementsContent = [this.horse_lv_bg_mg_i(),this.img_coin_bg0_i(),this.btn_shop0_i(),this.main_coin_num_lb_i(),this.img_coin1_add_i(),this.img_zuan_bg0_i(),this.btn_noticetip0_i(),this.sub_coin_num_lb_i(),this.img_coin2_add_i(),this.horse_lv_img_i()];
		return t;
	};
	_proto.horse_lv_bg_mg_i = function () {
		var t = new eui.Image();
		this.horse_lv_bg_mg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.name = "horse_lv_bg_mg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 48;
		t.x = 7;
		t.y = 7.74;
		return t;
	};
	_proto.img_coin_bg0_i = function () {
		var t = new eui.Image();
		this.img_coin_bg0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.name = "img_coin_bg";
		t.source = "bar_coin_png";
		t.width = 159;
		t.x = 657.04;
		t.y = 20.24;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.width = 39;
		t.x = 640.39;
		t.y = 20.34;
		t.skinName = LoginUI$Skin36;
		return t;
	};
	_proto.main_coin_num_lb_i = function () {
		var t = new eui.Label();
		this.main_coin_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "main_coin_num_lb";
		t.size = 26;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 676.52;
		t.y = 26.85;
		return t;
	};
	_proto.img_coin1_add_i = function () {
		var t = new eui.Button();
		this.img_coin1_add = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.label = "";
		t.name = "img_coin1_add";
		t.width = 35;
		t.x = 784.15;
		t.y = 23.08;
		t.skinName = LoginUI$Skin37;
		return t;
	};
	_proto.img_zuan_bg0_i = function () {
		var t = new eui.Image();
		this.img_zuan_bg0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.name = "img_zuan_bg";
		t.source = "bar_coin_png";
		t.width = 159;
		t.x = 845.05;
		t.y = 19.78;
		return t;
	};
	_proto.btn_noticetip0_i = function () {
		var t = new eui.Button();
		this.btn_noticetip0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_noticetip";
		t.width = 39;
		t.x = 827.27;
		t.y = 19.88;
		t.skinName = LoginUI$Skin38;
		return t;
	};
	_proto.sub_coin_num_lb_i = function () {
		var t = new eui.Label();
		this.sub_coin_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.name = "sub_coin_num_lb";
		t.size = 26;
		t.text = "0";
		t.textAlign = "center";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.width = 115;
		t.x = 859.03;
		t.y = 27.12;
		return t;
	};
	_proto.img_coin2_add_i = function () {
		var t = new eui.Button();
		this.img_coin2_add = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31;
		t.label = "";
		t.name = "img_coin2_add";
		t.width = 35;
		t.x = 972.19;
		t.y = 24.41;
		t.skinName = LoginUI$Skin39;
		return t;
	};
	_proto.horse_lv_img_i = function () {
		var t = new eui.Image();
		this.horse_lv_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30.52;
		t.name = "horse_lv_img";
		t.source = "icon_level_d_png";
		t.width = 22.62;
		t.x = 19.71;
		t.y = 16.35;
		return t;
	};
	_proto.horse_name_group_i = function () {
		var t = new eui.Group();
		this.horse_name_group = t;
		t.anchorOffsetX = 0;
		t.height = 200;
		t.name = "horse_name_group";
		t.width = 395;
		t.x = 885.53;
		t.y = 537.84;
		t.elementsContent = [this._Image7_i(),this.horse_name_lb_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.source = "bar_name_di_png";
		t.width = 322;
		t.x = 36.49;
		t.y = 53.36;
		return t;
	};
	_proto.horse_name_lb_i = function () {
		var t = new eui.Label();
		this.horse_name_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.name = "horse_name_lb";
		t.size = 32;
		t.strokeColor = 0xC63B3B;
		t.text = "Ferrari";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 364;
		t.x = 22;
		t.y = 63.86;
		return t;
	};
	_proto.sell_group_i = function () {
		var t = new eui.Group();
		this.sell_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.name = "sell_group";
		t.visible = false;
		t.width = 231;
		t.x = 931.29;
		t.y = 665.66;
		t.elementsContent = [this._Image8_i(),this.merge_fail_confirm0_i(),this.sell_num_lb_i(),this._Image9_i(),this.sell_btn_lb_i(),this.up_img_i(),this.down_img_i()];
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18;
		t.source = "Input-a-price_png";
		t.width = 98;
		t.x = 8.5;
		t.y = 5.67;
		return t;
	};
	_proto.merge_fail_confirm0_i = function () {
		var t = new eui.Image();
		this.merge_fail_confirm0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.name = "merge_fail_confirm";
		t.source = "bar_name_di2_png";
		t.width = 76.67;
		t.x = 2;
		t.y = 30.67;
		return t;
	};
	_proto.sell_num_lb_i = function () {
		var t = new eui.Label();
		this.sell_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "sell_num_lb";
		t.size = 18;
		t.text = "11";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 61.67;
		t.x = 8.21;
		t.y = 34;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "btn_info3_png";
		t.width = 111;
		t.x = 115;
		t.y = 16;
		return t;
	};
	_proto.sell_btn_lb_i = function () {
		var t = new eui.Label();
		this.sell_btn_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.name = "sell_btn_lb";
		t.size = 22;
		t.text = "Sell";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 109;
		t.x = 115;
		t.y = 17;
		return t;
	};
	_proto.up_img_i = function () {
		var t = new eui.Image();
		this.up_img = t;
		t.height = 24;
		t.name = "up_img";
		t.rotation = 2.05;
		t.source = "btn_point5_png";
		t.width = 34;
		t.x = 81.02;
		t.y = 22.4;
		return t;
	};
	_proto.down_img_i = function () {
		var t = new eui.Image();
		this.down_img = t;
		t.height = 24;
		t.name = "down_img";
		t.skewX = -180;
		t.source = "btn_point5_png";
		t.width = 34;
		t.x = 81;
		t.y = 67.67;
		return t;
	};
	_proto.buynft_group_i = function () {
		var t = new eui.Group();
		this.buynft_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.name = "buynft_group";
		t.visible = false;
		t.width = 231;
		t.x = 933.79;
		t.y = 664.16;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this.btn_shop1_i(),this.buy_nft_main_i(),this.btn_shop2_i(),this.main_coin_num_lb1_i(),this._Label1_i(),this.buynft_btn_lb_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_info3_png";
		t.width = 202;
		t.x = 4.4;
		t.y = -2.5;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_info_di_16_png";
		t.width = 181;
		t.x = 14.9;
		t.y = 39.5;
		return t;
	};
	_proto.btn_shop1_i = function () {
		var t = new eui.Button();
		this.btn_shop1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 84.69;
		t.y = 39.85;
		t.skinName = LoginUI$Skin40;
		return t;
	};
	_proto.buy_nft_main_i = function () {
		var t = new eui.Label();
		this.buy_nft_main = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "buy_nft_main";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.size = 26;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.width = 100.67;
		t.x = 114.49;
		t.y = 44.5;
		return t;
	};
	_proto.btn_shop2_i = function () {
		var t = new eui.Button();
		this.btn_shop2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.visible = false;
		t.width = 39;
		t.x = 121.31;
		t.y = 40.37;
		t.skinName = LoginUI$Skin41;
		return t;
	};
	_proto.main_coin_num_lb1_i = function () {
		var t = new eui.Label();
		this.main_coin_num_lb1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "main_coin_num_lb";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.size = 26;
		t.text = "2";
		t.textAlign = "left";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 74;
		t.x = 146.88;
		t.y = 44.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.text = "Confirm";
		t.width = 131;
		t.x = 54;
		t.y = 5;
		return t;
	};
	_proto.buynft_btn_lb_i = function () {
		var t = new eui.Label();
		this.buynft_btn_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.name = "buynft_btn_lb";
		t.scaleX = 1;
		t.scaleY = 1;
		t.text = "";
		t.width = 242;
		t.x = -11;
		t.y = -8.5;
		return t;
	};
	_proto.hall_horse_body_i = function () {
		var t = new eui.Image();
		this.hall_horse_body = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 549;
		t.name = "hall_horse_body";
		t.source = "horse01_body_png";
		t.touchEnabled = false;
		t.visible = false;
		t.width = 517;
		t.x = 324.52;
		t.y = 135.48;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/horseItemGroup_market.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	var NoticeGroup$Skin42 = 	(function (_super) {
		__extends(NoticeGroup$Skin42, _super);
		function NoticeGroup$Skin42() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin42;
	})(eui.Skin);

	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["horse_body","img_head_bg","horse_lv_img","select_2_img","start_1","start_2","start_3","start_4","start_5","horse_sex","horse_name","pay_money","horse_index","horse_score","btn_shop","group_1"];
		
		this.height = 269;
		this.width = 199;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 59;
		t.y = 61;
		t.elementsContent = [this._Image1_i(),this.horse_body_i(),this.img_head_bg_i(),this.horse_lv_img_i(),this.select_2_img_i(),this.start_1_i(),this.start_2_i(),this.start_3_i(),this.start_4_i(),this.start_5_i(),this.horse_sex_i(),this._Image2_i(),this.horse_name_i(),this.pay_money_i(),this.horse_index_i(),this.horse_score_i(),this.btn_shop_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.source = "bar_info_di_29_png";
		t.width = 194;
		t.x = -14.1;
		t.y = -11.2;
		return t;
	};
	_proto.horse_body_i = function () {
		var t = new eui.Image();
		this.horse_body = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91;
		t.name = "horse_body";
		t.source = "stand_horse_png";
		t.width = 91.8;
		t.x = 38.1;
		t.y = 66;
		return t;
	};
	_proto.img_head_bg_i = function () {
		var t = new eui.Image();
		this.img_head_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 35.4;
		t.x = 6.45;
		t.y = -0.81;
		return t;
	};
	_proto.horse_lv_img_i = function () {
		var t = new eui.Image();
		this.horse_lv_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.08;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 22.84;
		t.x = 13.72;
		t.y = 5.34;
		return t;
	};
	_proto.select_2_img_i = function () {
		var t = new eui.Image();
		this.select_2_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 277.43;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "selec10_s_png";
		t.visible = false;
		t.width = 202.84;
		t.x = -18.42;
		t.y = -20.34;
		return t;
	};
	_proto.start_1_i = function () {
		var t = new eui.Image();
		this.start_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 59.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_2_i = function () {
		var t = new eui.Image();
		this.start_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 72.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_3_i = function () {
		var t = new eui.Image();
		this.start_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 85.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_4_i = function () {
		var t = new eui.Image();
		this.start_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 98.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_5_i = function () {
		var t = new eui.Image();
		this.start_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 111.5;
		t.y = 24.63;
		return t;
	};
	_proto.horse_sex_i = function () {
		var t = new eui.Image();
		this.horse_sex = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.25;
		t.name = "horse_sex";
		t.source = "icon_Male_png";
		t.width = 13.5;
		t.x = 140.5;
		t.y = 8.36;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "bar_info_di_28_png";
		t.width = 177;
		t.x = -2;
		t.y = 195;
		return t;
	};
	_proto.horse_name_i = function () {
		var t = new eui.Label();
		this.horse_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.name = "horse_name";
		t.size = 12;
		t.text = "Echo RAMBO";
		t.textAlign = "center";
		t.textColor = 0xedd3d3;
		t.verticalAlign = "middle";
		t.width = 94.25;
		t.x = 46.25;
		t.y = 10.29;
		return t;
	};
	_proto.pay_money_i = function () {
		var t = new eui.Label();
		this.pay_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.25;
		t.name = "pay_money";
		t.size = 18;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xeafc02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 73;
		t.y = 197.63;
		return t;
	};
	_proto.horse_index_i = function () {
		var t = new eui.Label();
		this.horse_index = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.name = "horse_index";
		t.size = 14;
		t.text = "#111";
		t.textAlign = "right";
		t.textColor = 0x68625d;
		t.verticalAlign = "middle";
		t.width = 68.05;
		t.x = 11.95;
		t.y = 174;
		return t;
	};
	_proto.horse_score_i = function () {
		var t = new eui.Label();
		this.horse_score = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.name = "horse_score";
		t.size = 14;
		t.text = "686";
		t.textAlign = "left";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 51.05;
		t.x = 100;
		t.y = 174;
		return t;
	};
	_proto.btn_shop_i = function () {
		var t = new eui.Button();
		this.btn_shop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 43;
		t.y = 204;
		t.skinName = NoticeGroup$Skin42;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/horseItemGroup_ranch.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["img_head_bg","horse_lv_img","select_2_img","start_0","start_1","start_2","start_3","start_4","start_5","group_1"];
		
		this.height = 142;
		this.width = 114;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 59;
		t.y = 59;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img_head_bg_i(),this.horse_lv_img_i(),this.select_2_img_i(),this.start_0_i(),this.start_1_i(),this.start_2_i(),this.start_3_i(),this.start_4_i(),this.start_5_i(),this._Label1_i(),this._Label2_i(),this._Label3_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg_i = function () {
		var t = new eui.Image();
		this.img_head_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img_i = function () {
		var t = new eui.Image();
		this.horse_lv_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img_i = function () {
		var t = new eui.Image();
		this.select_2_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_0_i = function () {
		var t = new eui.Image();
		this.start_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_1_i = function () {
		var t = new eui.Image();
		this.start_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_2_i = function () {
		var t = new eui.Image();
		this.start_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_3_i = function () {
		var t = new eui.Image();
		this.start_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_4_i = function () {
		var t = new eui.Image();
		this.start_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_5_i = function () {
		var t = new eui.Image();
		this.start_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5e4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xeafc02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xf48e18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/horseItemGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["horse_head","select_2_img","img_head_bg","horse_lv_img","start_1","start_2","start_3","start_4","start_5","group_1"];
		
		this.height = 119;
		this.width = 119;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 59;
		t.y = 59;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.horse_head_i(),this.select_2_img_i(),this.img_head_bg_i(),this.horse_lv_img_i(),this.start_1_i(),this.start_2_i(),this.start_3_i(),this.start_4_i(),this.start_5_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "info_tx_frame_png";
		t.width = 88;
		t.x = 1.5;
		t.y = 0.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 4.5;
		t.y = 3.5;
		return t;
	};
	_proto.horse_head_i = function () {
		var t = new eui.Image();
		this.horse_head = t;
		t.height = 82;
		t.name = "horse_head";
		t.source = "horse01_head01_png";
		t.width = 82;
		t.x = 4.5;
		t.y = 3.5;
		return t;
	};
	_proto.select_2_img_i = function () {
		var t = new eui.Image();
		this.select_2_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(10,9,91,91);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select2_s_png";
		t.visible = false;
		t.width = 87;
		t.x = 1.5;
		t.y = -1;
		return t;
	};
	_proto.img_head_bg_i = function () {
		var t = new eui.Image();
		this.img_head_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = 2.65;
		t.y = -0.61;
		return t;
	};
	_proto.horse_lv_img_i = function () {
		var t = new eui.Image();
		this.horse_lv_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 9.92;
		t.y = 5.54;
		return t;
	};
	_proto.start_1_i = function () {
		var t = new eui.Image();
		this.start_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 11.5;
		t.y = 68.9;
		return t;
	};
	_proto.start_2_i = function () {
		var t = new eui.Image();
		this.start_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 24.5;
		t.y = 68.9;
		return t;
	};
	_proto.start_3_i = function () {
		var t = new eui.Image();
		this.start_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 37.5;
		t.y = 68.9;
		return t;
	};
	_proto.start_4_i = function () {
		var t = new eui.Image();
		this.start_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 50.5;
		t.y = 68.9;
		return t;
	};
	_proto.start_5_i = function () {
		var t = new eui.Image();
		this.start_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 63.5;
		t.y = 68.9;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/LoginUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	function LoginUI() {
		_super.call(this);
		this.skinParts = ["account_lb_txt","password_lb_txt","account_lb_title","password_lb_title","btn_registe","btn_login","btn_login_wx"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.account_lb_txt_i(),this.password_lb_txt_i(),this.account_lb_title_i(),this.password_lb_title_i(),this.btn_registe_i(),this.btn_login_i(),this.btn_login_wx_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.account_lb_txt_i = function () {
		var t = new eui.TextInput();
		this.account_lb_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.name = "account_lb_txt";
		t.width = 304;
		t.x = 555;
		t.y = 592.5;
		return t;
	};
	_proto.password_lb_txt_i = function () {
		var t = new eui.TextInput();
		this.password_lb_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 63;
		t.name = "password_lb_txt";
		t.width = 304;
		t.x = 555;
		t.y = 676;
		return t;
	};
	_proto.account_lb_title_i = function () {
		var t = new eui.Label();
		this.account_lb_title = t;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "account_lb_title";
		t.size = 45;
		t.text = "账号：";
		t.x = 420;
		t.y = 592.5;
		return t;
	};
	_proto.password_lb_title_i = function () {
		var t = new eui.Label();
		this.password_lb_title = t;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "password_lb_title";
		t.size = 45;
		t.text = "密码：";
		t.x = 420;
		t.y = 687.5;
		return t;
	};
	_proto.btn_registe_i = function () {
		var t = new eui.Label();
		this.btn_registe = t;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.name = "btn_registe";
		t.text = "注册";
		t.x = 942;
		t.y = 609;
		return t;
	};
	_proto.btn_login_i = function () {
		var t = new eui.Label();
		this.btn_login = t;
		t.name = "btn_login";
		t.text = "登录";
		t.x = 942;
		t.y = 687.5;
		return t;
	};
	_proto.btn_login_wx_i = function () {
		var t = new eui.Image();
		this.btn_login_wx = t;
		t.anchorOffsetX = 152;
		t.anchorOffsetY = 68;
		t.height = 132;
		t.name = "btn_login_wx";
		t.source = "weixin_login_png";
		t.width = 304;
		t.x = 688.34;
		t.y = 657.67;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/LvGetPointGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["lb_lv","img_role","img_item","img_select","rw_num","group_1"];
		
		this.height = 342;
		this.width = 180;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetY = 0;
		t.height = 342;
		t.name = "group_1";
		t.width = 180;
		t.x = -1.51;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.lb_lv_i(),this._Image2_i(),this.img_role_i(),this.img_item_i(),this.img_select_i(),this.rw_num_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 136;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LvGetPoint_png";
		t.width = 89;
		t.x = 46.12;
		t.y = 201.67;
		return t;
	};
	_proto.lb_lv_i = function () {
		var t = new eui.Label();
		this.lb_lv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.58;
		t.name = "lb_lv";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "Lv.30";
		t.textAlign = "center";
		t.textColor = 0x4D71D8;
		t.verticalAlign = "middle";
		t.width = 54.15;
		t.x = 64.15;
		t.y = 282.11;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LvGetBottom_png";
		t.width = 151;
		t.x = 14;
		t.y = 127.24;
		return t;
	};
	_proto.img_role_i = function () {
		var t = new eui.Image();
		this.img_role = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.name = "img_role";
		t.source = "diy_2p_png";
		t.visible = false;
		t.width = 122;
		t.x = 27;
		t.y = 19.74;
		return t;
	};
	_proto.img_item_i = function () {
		var t = new eui.Image();
		this.img_item = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.name = "img_item";
		t.source = "hp_03_png";
		t.width = 74;
		t.x = 50.99;
		t.y = 92;
		return t;
	};
	_proto.img_select_i = function () {
		var t = new eui.Image();
		this.img_select = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.name = "img_select";
		t.source = "sevent_got_png";
		t.width = 32;
		t.x = 132;
		t.y = 120;
		return t;
	};
	_proto.rw_num_i = function () {
		var t = new eui.Label();
		this.rw_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 19;
		t.italic = true;
		t.name = "rw_num";
		t.size = 16;
		t.text = "初级金币包x 30";
		t.textAlign = "center";
		t.textColor = 0x27c11f;
		t.verticalAlign = "middle";
		t.width = 125;
		t.x = 27;
		t.y = 164;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/LvGetProGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["img_slot","img_pro","group_1"];
		
		this.height = 42.67;
		this.width = 180;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetY = 0;
		t.height = 42.67;
		t.name = "group_1";
		t.width = 180;
		t.x = -1.51;
		t.y = 0;
		t.elementsContent = [this.img_slot_i(),this.img_pro_i()];
		return t;
	};
	_proto.img_slot_i = function () {
		var t = new eui.Image();
		this.img_slot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.67;
		t.name = "img_slot";
		t.scale9Grid = new egret.Rectangle(20,5,1084,35);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LvGetSlot_png";
		t.width = 180;
		t.x = 1;
		t.y = 0;
		return t;
	};
	_proto.img_pro_i = function () {
		var t = new eui.Image();
		this.img_pro = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.67;
		t.name = "img_pro";
		t.scale9Grid = new egret.Rectangle(24,5,1080,35);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LvGetPro_png";
		t.width = 130.31;
		t.x = 1;
		t.y = 0;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/MainSetting.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin43 = 	(function (_super) {
		__extends(LoginUI$Skin43, _super);
		function LoginUI$Skin43() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_close_blue_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin43.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_close_blue_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin43;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","btn_close","btn_close_ms","btn_open_ms","login_out","img_left","img_right"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_platform_i(),this.btn_close_i(),this.btn_close_ms_i(),this.btn_open_ms_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this.login_out_i(),this._Label4_i(),this.img_left_i(),this.img_right_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_platform_i = function () {
		var t = new eui.Image();
		this.fighting_platform = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 414.72;
		t.name = "fighting_platform";
		t.scale9Grid = new egret.Rectangle(7,65,164,107);
		t.source = "main_setting_bg_png";
		t.width = 682.3;
		t.x = 330.8;
		t.y = 189.12;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75.33;
		t.label = "";
		t.name = "btn_close";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 76.33;
		t.x = 973.11;
		t.y = 162.79;
		t.skinName = LoginUI$Skin43;
		return t;
	};
	_proto.btn_close_ms_i = function () {
		var t = new eui.Image();
		this.btn_close_ms = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.name = "btn_close_ms";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "settting_close_music_png";
		t.width = 168;
		t.x = 599.24;
		t.y = 300.48;
		return t;
	};
	_proto.btn_open_ms_i = function () {
		var t = new eui.Image();
		this.btn_open_ms = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.name = "btn_open_ms";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "settting_open_music_png";
		t.width = 168;
		t.x = 389.08;
		t.y = 300.48;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.borderColor = 0x000000;
		t.height = 42.12;
		t.size = 36;
		t.stroke = 3;
		t.strokeColor = 0xcae9ff;
		t.text = "游戏设置";
		t.textColor = 0x404e73;
		t.width = 148.25;
		t.x = 593.28;
		t.y = 203.48;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.borderColor = 0x000000;
		t.height = 42.12;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0xCAE9FF;
		t.text = "音乐    开";
		t.textAlign = "center";
		t.textColor = 0x5a71d1;
		t.verticalAlign = "middle";
		t.width = 148.25;
		t.x = 396.98;
		t.y = 458.78;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.borderColor = 0x000000;
		t.height = 42.12;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0xCAE9FF;
		t.text = "音乐    关";
		t.textAlign = "center";
		t.textColor = 0x5a71d1;
		t.verticalAlign = "middle";
		t.width = 148.25;
		t.x = 607.14;
		t.y = 458.78;
		return t;
	};
	_proto.login_out_i = function () {
		var t = new eui.Image();
		this.login_out = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 240;
		t.name = "login_out";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "main_setting_logout_png";
		t.width = 168;
		t.x = 812.24;
		t.y = 299;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.borderColor = 0x000000;
		t.height = 42.12;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0xCAE9FF;
		t.text = "返回登录";
		t.textAlign = "center";
		t.textColor = 0x5A71D1;
		t.verticalAlign = "middle";
		t.width = 148.25;
		t.x = 820.14;
		t.y = 454.3;
		return t;
	};
	_proto.img_left_i = function () {
		var t = new eui.Image();
		this.img_left = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "img_left";
		t.source = "sevent_got_png";
		t.width = 40;
		t.x = 483.48;
		t.y = 376.48;
		return t;
	};
	_proto.img_right_i = function () {
		var t = new eui.Image();
		this.img_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "img_right";
		t.source = "sevent_got_png";
		t.visible = false;
		t.width = 40;
		t.x = 705.74;
		t.y = 375;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/mapDIYUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin44 = 	(function (_super) {
		__extends(LoginUI$Skin44, _super);
		function LoginUI$Skin44() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","diy_btn_xia_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin44.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "diy_btn_xia_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin44;
	})(eui.Skin);

	var LoginUI$Skin45 = 	(function (_super) {
		__extends(LoginUI$Skin45, _super);
		function LoginUI$Skin45() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","mymap_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin45.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "mymap_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin45;
	})(eui.Skin);

	var LoginUI$Skin46 = 	(function (_super) {
		__extends(LoginUI$Skin46, _super);
		function LoginUI$Skin46() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","map_rank_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin46.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "map_rank_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin46;
	})(eui.Skin);

	var LoginUI$Skin47 = 	(function (_super) {
		__extends(LoginUI$Skin47, _super);
		function LoginUI$Skin47() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin47.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_zuanshi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin47;
	})(eui.Skin);

	var LoginUI$Skin48 = 	(function (_super) {
		__extends(LoginUI$Skin48, _super);
		function LoginUI$Skin48() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin48.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_coin";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin48;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_ground","btn_block","btn_decorate","STYLE_BTN","res_group","res_scroller","btn_mymap","t_di","t_biao","t_zhang","t_ai","t_zhuang","t_shi","btn_ground_lb","btn_block_lb","btn_decorate_lb","lb_1p","lb_2p","lb_eraser","lb_save","btn_rank","img_coin_bg","img_zuan_bg","btn_noticetip","btn_shop3","coin_num_lb","zuan_num_lb"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_ground_i(),this.btn_block_i(),this.btn_decorate_i(),this.STYLE_BTN_i(),this.res_scroller_i(),this._Label1_i(),this.btn_mymap_i(),this.t_di_i(),this.t_biao_i(),this.t_zhang_i(),this.t_ai_i(),this.t_zhuang_i(),this.t_shi_i(),this.btn_ground_lb_i(),this.btn_block_lb_i(),this.btn_decorate_lb_i(),this.lb_1p_i(),this.lb_2p_i(),this.lb_eraser_i(),this.lb_save_i(),this.btn_rank_i(),this.img_coin_bg_i(),this.img_zuan_bg_i(),this.btn_noticetip_i(),this.btn_shop3_i(),this.coin_num_lb_i(),this.zuan_num_lb_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 690.73;
		t.source = "diy_bg_png";
		t.width = 1334;
		t.x = -0.62;
		t.y = 60.13;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "diy_xiala_bg_png";
		t.width = 305;
		t.x = 161;
		t.y = 110.96;
		return t;
	};
	_proto.btn_ground_i = function () {
		var t = new eui.Image();
		this.btn_ground = t;
		t.height = 113;
		t.name = "btn_ground";
		t.source = "diy_page_yes_png";
		t.width = 69;
		t.x = 95.64;
		t.y = 214.18;
		return t;
	};
	_proto.btn_block_i = function () {
		var t = new eui.Image();
		this.btn_block = t;
		t.height = 113;
		t.name = "btn_block";
		t.source = "diy_page_not_png";
		t.width = 69;
		t.x = 95.6;
		t.y = 347.83;
		return t;
	};
	_proto.btn_decorate_i = function () {
		var t = new eui.Image();
		this.btn_decorate = t;
		t.height = 113;
		t.name = "btn_decorate";
		t.source = "diy_page_not_png";
		t.width = 69;
		t.x = 95.65;
		t.y = 484.13;
		return t;
	};
	_proto.STYLE_BTN_i = function () {
		var t = new eui.Button();
		this.STYLE_BTN = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28.24;
		t.label = "";
		t.name = "STYLE_BTN";
		t.width = 33.24;
		t.x = 415.26;
		t.y = 120.84;
		t.skinName = LoginUI$Skin44;
		return t;
	};
	_proto.res_scroller_i = function () {
		var t = new eui.Scroller();
		this.res_scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 445.33;
		t.name = "res_scroller";
		t.width = 320;
		t.x = 164.88;
		t.y = 213.98;
		t.viewport = this.res_group_i();
		return t;
	};
	_proto.res_group_i = function () {
		var t = new eui.Group();
		this.res_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 448.33;
		t.name = "res_group";
		t.width = 320;
		t.elementsContent = [this._Button1_i(),this._Button2_i(),this._Button3_i()];
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.height = 80;
		t.label = "Button";
		t.width = 80;
		t.x = 12;
		t.y = 16;
		return t;
	};
	_proto._Button2_i = function () {
		var t = new eui.Button();
		t.height = 80;
		t.label = "Button";
		t.width = 80;
		t.x = 117.34;
		t.y = 16;
		return t;
	};
	_proto._Button3_i = function () {
		var t = new eui.Button();
		t.height = 80;
		t.label = "Button";
		t.width = 80;
		t.x = 224;
		t.y = 16;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 26;
		t.text = "选择主题地图";
		t.textColor = 0x95583d;
		t.x = 182.88;
		t.y = 122.96;
		return t;
	};
	_proto.btn_mymap_i = function () {
		var t = new eui.Button();
		this.btn_mymap = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 167.33;
		t.label = "";
		t.name = "btn_mymap";
		t.width = 170.67;
		t.x = 12.21;
		t.y = 536.93;
		t.skinName = LoginUI$Skin45;
		return t;
	};
	_proto.t_di_i = function () {
		var t = new eui.Label();
		this.t_di = t;
		t.name = "t_di";
		t.size = 26;
		t.text = "地";
		t.textColor = 0xf7d69d;
		t.x = 118;
		t.y = 247;
		return t;
	};
	_proto.t_biao_i = function () {
		var t = new eui.Label();
		this.t_biao = t;
		t.name = "t_biao";
		t.size = 26;
		t.text = "表";
		t.textColor = 0xF7D69D;
		t.x = 118;
		t.y = 276.9;
		return t;
	};
	_proto.t_zhang_i = function () {
		var t = new eui.Label();
		this.t_zhang = t;
		t.name = "t_zhang";
		t.size = 26;
		t.text = "障";
		t.textColor = 0xd5b6a0;
		t.x = 117.65;
		t.y = 374.43;
		return t;
	};
	_proto.t_ai_i = function () {
		var t = new eui.Label();
		this.t_ai = t;
		t.name = "t_ai";
		t.size = 26;
		t.text = "碍";
		t.textColor = 0xd5b6a0;
		t.x = 117.65;
		t.y = 404.33;
		return t;
	};
	_proto.t_zhuang_i = function () {
		var t = new eui.Label();
		this.t_zhuang = t;
		t.name = "t_zhuang";
		t.size = 26;
		t.text = "装";
		t.textColor = 0xD5B6A0;
		t.x = 118.33;
		t.y = 510.93;
		return t;
	};
	_proto.t_shi_i = function () {
		var t = new eui.Label();
		this.t_shi = t;
		t.name = "t_shi";
		t.size = 26;
		t.text = "饰";
		t.textColor = 0xD5B6A0;
		t.x = 118.33;
		t.y = 540.83;
		return t;
	};
	_proto.btn_ground_lb_i = function () {
		var t = new eui.Label();
		this.btn_ground_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.name = "btn_ground_lb";
		t.text = "";
		t.width = 69;
		t.x = 96;
		t.y = 214.18;
		return t;
	};
	_proto.btn_block_lb_i = function () {
		var t = new eui.Label();
		this.btn_block_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.name = "btn_block_lb";
		t.text = "";
		t.width = 69;
		t.x = 96.83;
		t.y = 349;
		return t;
	};
	_proto.btn_decorate_lb_i = function () {
		var t = new eui.Label();
		this.btn_decorate_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 113;
		t.name = "btn_decorate_lb";
		t.text = "";
		t.width = 69;
		t.x = 95;
		t.y = 484.43;
		return t;
	};
	_proto.lb_1p_i = function () {
		var t = new eui.Label();
		this.lb_1p = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.border = false;
		t.height = 58;
		t.name = "lb_1p";
		t.text = "";
		t.width = 120;
		t.x = 356.88;
		t.y = 665;
		return t;
	};
	_proto.lb_2p_i = function () {
		var t = new eui.Label();
		this.lb_2p = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.border = false;
		t.height = 58;
		t.name = "lb_2p";
		t.text = "";
		t.width = 120;
		t.x = 530;
		t.y = 666;
		return t;
	};
	_proto.lb_eraser_i = function () {
		var t = new eui.Label();
		this.lb_eraser = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.border = false;
		t.height = 58;
		t.name = "lb_eraser";
		t.text = "";
		t.width = 120;
		t.x = 691.75;
		t.y = 664;
		return t;
	};
	_proto.lb_save_i = function () {
		var t = new eui.Label();
		this.lb_save = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.border = false;
		t.height = 58;
		t.name = "lb_save";
		t.text = "";
		t.width = 120;
		t.x = 856.1;
		t.y = 664;
		return t;
	};
	_proto.btn_rank_i = function () {
		var t = new eui.Button();
		this.btn_rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85.9;
		t.label = "";
		t.name = "btn_rank";
		t.width = 130.97;
		t.x = 1169.96;
		t.y = 76.88;
		t.skinName = LoginUI$Skin46;
		return t;
	};
	_proto.img_coin_bg_i = function () {
		var t = new eui.Image();
		this.img_coin_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "img_coin_bg";
		t.source = "mini_own";
		t.width = 129.33;
		t.x = 684.68;
		t.y = 21.54;
		return t;
	};
	_proto.img_zuan_bg_i = function () {
		var t = new eui.Image();
		this.img_zuan_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "img_zuan_bg";
		t.source = "mini_own";
		t.width = 124;
		t.x = 961.39;
		t.y = 21.54;
		return t;
	};
	_proto.btn_noticetip_i = function () {
		var t = new eui.Button();
		this.btn_noticetip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.label = "";
		t.name = "btn_noticetip";
		t.width = 46;
		t.x = 929.61;
		t.y = 12.64;
		t.skinName = LoginUI$Skin47;
		return t;
	};
	_proto.btn_shop3_i = function () {
		var t = new eui.Button();
		this.btn_shop3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.label = "";
		t.name = "btn_shop";
		t.width = 46;
		t.x = 651.52;
		t.y = 12.64;
		t.skinName = LoginUI$Skin48;
		return t;
	};
	_proto.coin_num_lb_i = function () {
		var t = new eui.Label();
		this.coin_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "coin_num_lb";
		t.size = 26;
		t.text = "2222";
		t.textAlign = "right";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 88.51;
		t.x = 718.41;
		t.y = 24.21;
		return t;
	};
	_proto.zuan_num_lb_i = function () {
		var t = new eui.Label();
		this.zuan_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.name = "zuan_num_lb";
		t.size = 26;
		t.text = "2222";
		t.textAlign = "right";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 89;
		t.x = 989.56;
		t.y = 24.88;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/mapMiniDIYUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	function LoginUI() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 750;
		this.width = 1334;
	}
	var _proto = LoginUI.prototype;

	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/MapRankGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["lb_title","lb_author","lb_sign","like_num","like_heart","group_1"];
		
		this.height = 263;
		this.width = 800;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 262.91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 790.92;
		t.x = 5.7;
		t.y = 0.66;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.lb_title_i(),this.lb_author_i(),this.lb_sign_i(),this._Label1_i(),this._Label2_i(),this._Image3_i(),this._Image4_i(),this.like_num_i(),this.like_heart_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 253.33;
		t.scale9Grid = new egret.Rectangle(18,18,114,114);
		t.source = "normal_bg_2_png";
		t.width = 780.34;
		t.x = 4.33;
		t.y = 4.67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36.33;
		t.source = "map_rank_name_bg_png";
		t.width = 310.66;
		t.x = 5.33;
		t.y = 21.68;
		return t;
	};
	_proto.lb_title_i = function () {
		var t = new eui.Label();
		this.lb_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.67;
		t.name = "lb_title";
		t.size = 26;
		t.text = "小猪佩奇的幸福乐园";
		t.textAlign = "center";
		t.textColor = 0xfffef9;
		t.verticalAlign = "middle";
		t.width = 294.33;
		t.x = 8.68;
		t.y = 24.34;
		return t;
	};
	_proto.lb_author_i = function () {
		var t = new eui.Label();
		this.lb_author = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32.67;
		t.name = "lb_author";
		t.size = 22;
		t.text = "我是小猪佩奇";
		t.textAlign = "left";
		t.textColor = 0xFFFEF9;
		t.verticalAlign = "middle";
		t.width = 243.33;
		t.x = 127.67;
		t.y = 70.01;
		return t;
	};
	_proto.lb_sign_i = function () {
		var t = new eui.Label();
		this.lb_sign = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 103.34;
		t.name = "lb_sign";
		t.size = 22;
		t.text = "     我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇";
		t.textAlign = "left";
		t.textColor = 0xFFFEF9;
		t.verticalAlign = "middle";
		t.width = 346.66;
		t.x = 25.69;
		t.y = 132.68;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.size = 22;
		t.text = "地图作者：";
		t.textColor = 0xd4e4fc;
		t.width = 114.66;
		t.x = 25.69;
		t.y = 74.01;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.size = 22;
		t.text = "地图签名：";
		t.textColor = 0xD4E4FC;
		t.width = 114.66;
		t.x = 25.69;
		t.y = 104.01;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "like_kuang_bg_png";
		t.width = 82;
		t.x = 700.97;
		t.y = 209.36;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "mini_rank_like_png";
		t.width = 27;
		t.x = 710.47;
		t.y = 217.52;
		return t;
	};
	_proto.like_num_i = function () {
		var t = new eui.Label();
		this.like_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.name = "like_num";
		t.size = 22;
		t.text = "122";
		t.textAlign = "center";
		t.textColor = 0xf045a9;
		t.verticalAlign = "middle";
		t.width = 37;
		t.x = 742;
		t.y = 212;
		return t;
	};
	_proto.like_heart_i = function () {
		var t = new eui.Label();
		this.like_heart = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.name = "like_heart";
		t.text = "";
		t.width = 82;
		t.x = 701;
		t.y = 203;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/MapRankUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin49 = 	(function (_super) {
		__extends(LoginUI$Skin49, _super);
		function LoginUI$Skin49() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_close_blue_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin49.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_close_blue_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin49;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["scroll_group","scroll","fighting_parent","btn_close","match_rank_bg","lv_rank_bg","lb_new","lb_hot"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_parent_i(),this.btn_close_i(),this.match_rank_bg_i(),this.lv_rank_bg_i(),this.lb_new_i(),this.lb_hot_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_parent_i = function () {
		var t = new eui.Group();
		this.fighting_parent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 738;
		t.name = "fighting_parent";
		t.width = 1077;
		t.x = 60.27;
		t.y = 6;
		t.elementsContent = [this._Image1_i(),this.scroll_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 706.05;
		t.scale9Grid = new egret.Rectangle(18,19,112,114);
		t.source = "bag_bg_2_png";
		t.width = 815.15;
		t.x = 218.17;
		t.y = 20.15;
		return t;
	};
	_proto.scroll_i = function () {
		var t = new eui.Scroller();
		this.scroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 706.05;
		t.name = "scroll";
		t.width = 815.15;
		t.x = 218.17;
		t.y = 20.15;
		t.viewport = this.scroll_group_i();
		return t;
	};
	_proto.scroll_group_i = function () {
		var t = new eui.Group();
		this.scroll_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 686.35;
		t.name = "scroll_group";
		t.width = 815.15;
		t.x = 0;
		t.y = 3.03;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 34;
		t.anchorOffsetY = 33;
		t.height = 67.33;
		t.label = "";
		t.name = "btn_close";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 68.33;
		t.x = 1082.28;
		t.y = 40.17;
		t.skinName = LoginUI$Skin49;
		return t;
	};
	_proto.match_rank_bg_i = function () {
		var t = new eui.Image();
		this.match_rank_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109.39;
		t.name = "match_rank_bg";
		t.source = "map_rank_normal_png";
		t.width = 62.9;
		t.x = 216.23;
		t.y = 51.78;
		return t;
	};
	_proto.lv_rank_bg_i = function () {
		var t = new eui.Image();
		this.lv_rank_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 118.48;
		t.name = "lv_rank_bg";
		t.source = "map_rank_select_png";
		t.width = 61.58;
		t.x = 216.91;
		t.y = 176.84;
		return t;
	};
	_proto.lb_new_i = function () {
		var t = new eui.Label();
		this.lb_new = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 109.04;
		t.name = "lb_new";
		t.size = 26;
		t.text = "最\n新";
		t.textAlign = "center";
		t.textColor = 0x6377dc;
		t.verticalAlign = "middle";
		t.width = 59.7;
		t.x = 220.3;
		t.y = 52.3;
		return t;
	};
	_proto.lb_hot_i = function () {
		var t = new eui.Label();
		this.lb_hot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109.04;
		t.name = "lb_hot";
		t.size = 26;
		t.text = "最\n热";
		t.textAlign = "center";
		t.textColor = 0x6377DC;
		t.verticalAlign = "middle";
		t.width = 59.7;
		t.x = 219.35;
		t.y = 180.25;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/MapViewGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	var NoticeGroup$Skin50 = 	(function (_super) {
		__extends(NoticeGroup$Skin50, _super);
		function NoticeGroup$Skin50() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin50.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "normal_btn_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin50;
	})(eui.Skin);

	var NoticeGroup$Skin51 = 	(function (_super) {
		__extends(NoticeGroup$Skin51, _super);
		function NoticeGroup$Skin51() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin51.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "normal_btn_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin51;
	})(eui.Skin);

	var NoticeGroup$Skin52 = 	(function (_super) {
		__extends(NoticeGroup$Skin52, _super);
		function NoticeGroup$Skin52() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin52.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "normal_btn_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin52;
	})(eui.Skin);

	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["view_add","lb_title","lb_author","lb_sign","group_1","view_fight_btn","view_change_btn","view_add_btn"];
		
		this.height = 298;
		this.width = 800;
		this.elementsContent = [this._Image1_i(),this.view_add_i(),this.group_1_i(),this.view_fight_btn_i(),this.view_change_btn_i(),this.view_add_btn_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 287.33;
		t.scale9Grid = new egret.Rectangle(18,18,114,114);
		t.source = "normal_bg_2_png";
		t.width = 785.34;
		t.x = 7.33;
		t.y = 4.67;
		return t;
	};
	_proto.view_add_i = function () {
		var t = new eui.Image();
		this.view_add = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 280;
		t.name = "view_add";
		t.source = "add_my_map_png";
		t.width = 310;
		t.x = 13;
		t.y = 9;
		return t;
	};
	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 262.91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 740.92;
		t.x = 29.7;
		t.y = 15.66;
		t.elementsContent = [this._Image2_i(),this.lb_title_i(),this.lb_author_i(),this.lb_sign_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.33;
		t.source = "map_rank_name_bg_png";
		t.width = 307.66;
		t.x = 312.9;
		t.y = 21.84;
		return t;
	};
	_proto.lb_title_i = function () {
		var t = new eui.Label();
		this.lb_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.67;
		t.name = "lb_title";
		t.size = 26;
		t.text = "小猪佩奇的幸福乐园";
		t.textAlign = "center";
		t.textColor = 0xfffef9;
		t.verticalAlign = "middle";
		t.width = 290.33;
		t.x = 317.25;
		t.y = 24.5;
		return t;
	};
	_proto.lb_author_i = function () {
		var t = new eui.Label();
		this.lb_author = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 32.67;
		t.name = "lb_author";
		t.size = 22;
		t.text = "我是小猪佩奇";
		t.textAlign = "left";
		t.textColor = 0xFFFEF9;
		t.verticalAlign = "middle";
		t.width = 243.33;
		t.x = 421.54;
		t.y = 69.5;
		return t;
	};
	_proto.lb_sign_i = function () {
		var t = new eui.Label();
		this.lb_sign = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 103.34;
		t.name = "lb_sign";
		t.size = 22;
		t.text = "     我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇";
		t.textAlign = "left";
		t.textColor = 0xFFFEF9;
		t.verticalAlign = "middle";
		t.width = 406.66;
		t.x = 320.26;
		t.y = 112.17;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.size = 22;
		t.text = "地图作者：";
		t.textColor = 0xd4e4fc;
		t.width = 114.66;
		t.x = 320.26;
		t.y = 72.17;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30;
		t.size = 22;
		t.text = "地图签名：";
		t.textColor = 0xD4E4FC;
		t.width = 114.66;
		t.x = 320.26;
		t.y = 102.17;
		return t;
	};
	_proto.view_fight_btn_i = function () {
		var t = new eui.Button();
		this.view_fight_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "出 战";
		t.name = "view_fight_btn";
		t.visible = false;
		t.width = 111;
		t.x = 398.23;
		t.y = 220;
		t.skinName = NoticeGroup$Skin50;
		return t;
	};
	_proto.view_change_btn_i = function () {
		var t = new eui.Button();
		this.view_change_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "修 改";
		t.name = "view_change_btn";
		t.width = 111;
		t.x = 491.56;
		t.y = 220;
		t.skinName = NoticeGroup$Skin51;
		return t;
	};
	_proto.view_add_btn_i = function () {
		var t = new eui.Button();
		this.view_add_btn = t;
		t.anchorOffsetX = 55;
		t.anchorOffsetY = 27;
		t.height = 52;
		t.label = "新 增";
		t.name = "view_add_btn";
		t.width = 111;
		t.x = 546.56;
		t.y = 247;
		t.skinName = NoticeGroup$Skin52;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/MapViewUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin53 = 	(function (_super) {
		__extends(LoginUI$Skin53, _super);
		function LoginUI$Skin53() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_close_blue_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin53.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_close_blue_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin53;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["scroll_group","scroll","fighting_parent","btn_close"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_parent_i(),this.btn_close_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_parent_i = function () {
		var t = new eui.Group();
		this.fighting_parent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 738;
		t.name = "fighting_parent";
		t.width = 1077;
		t.x = 60.27;
		t.y = 6;
		t.elementsContent = [this._Image1_i(),this.scroll_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 706.05;
		t.scale9Grid = new egret.Rectangle(18,19,112,114);
		t.source = "bag_bg_2_png";
		t.width = 815.15;
		t.x = 218.17;
		t.y = 20.15;
		return t;
	};
	_proto.scroll_i = function () {
		var t = new eui.Scroller();
		this.scroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 706.05;
		t.name = "scroll";
		t.width = 815.15;
		t.x = 218.17;
		t.y = 20.15;
		t.viewport = this.scroll_group_i();
		return t;
	};
	_proto.scroll_group_i = function () {
		var t = new eui.Group();
		this.scroll_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 686.35;
		t.name = "scroll_group";
		t.width = 815.15;
		t.x = 0;
		t.y = 3.03;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 34;
		t.height = 67.33;
		t.label = "";
		t.name = "btn_close";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 68.33;
		t.x = 1084.28;
		t.y = 41.17;
		t.skinName = LoginUI$Skin53;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Market_horses.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin54 = 	(function (_super) {
		__extends(LoginUI$Skin54, _super);
		function LoginUI$Skin54() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin54.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin54;
	})(eui.Skin);

	var LoginUI$Skin55 = 	(function (_super) {
		__extends(LoginUI$Skin55, _super);
		function LoginUI$Skin55() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin55.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin55;
	})(eui.Skin);

	var LoginUI$Skin56 = 	(function (_super) {
		__extends(LoginUI$Skin56, _super);
		function LoginUI$Skin56() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin56.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin56;
	})(eui.Skin);

	var LoginUI$Skin57 = 	(function (_super) {
		__extends(LoginUI$Skin57, _super);
		function LoginUI$Skin57() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin57.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin57;
	})(eui.Skin);

	var LoginUI$Skin58 = 	(function (_super) {
		__extends(LoginUI$Skin58, _super);
		function LoginUI$Skin58() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin58.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin58;
	})(eui.Skin);

	var LoginUI$Skin59 = 	(function (_super) {
		__extends(LoginUI$Skin59, _super);
		function LoginUI$Skin59() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin59.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin59;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["img_head_bg0","horse_lv_img0","select_2_img0","start_6","start_0","start_1","start_2","start_3","start_4","btn_shop1","group_1","img_head_bg1","horse_lv_img1","select_2_img1","start_5","start_7","start_8","start_9","start_10","start_11","btn_shop0","group_0","img_head_bg2","horse_lv_img2","select_2_img2","start_12","start_13","start_14","start_15","start_16","start_17","btn_shop2","group_2","img_head_bg3","horse_lv_img3","select_2_img3","start_18","start_19","start_20","start_21","start_22","start_23","btn_shop3","group_3","img_head_bg4","horse_lv_img4","select_2_img4","start_24","start_25","start_26","start_27","start_28","start_29","btn_shop4","group_4","img_head_bg5","horse_lv_img5","select_2_img5","start_30","start_31","start_32","start_33","start_34","start_35","btn_shop5","group_5","scroll_group","scroll"];
		
		this.height = 600.67;
		this.width = 673.33;
		this.elementsContent = [this.scroll_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.scroll_i = function () {
		var t = new eui.Scroller();
		this.scroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 576;
		t.name = "scroll";
		t.width = 652;
		t.x = 11.45;
		t.y = 12.05;
		t.viewport = this.scroll_group_i();
		return t;
	};
	_proto.scroll_group_i = function () {
		var t = new eui.Group();
		this.scroll_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 637.33;
		t.name = "scroll_group";
		t.width = 922.67;
		t.x = -261.33;
		t.y = -173.33;
		t.elementsContent = [this.group_1_i(),this.group_0_i(),this.group_2_i(),this.group_3_i(),this.group_4_i(),this.group_5_i()];
		return t;
	};
	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 73.98;
		t.y = 76.3;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.img_head_bg0_i(),this.horse_lv_img0_i(),this.select_2_img0_i(),this.start_6_i(),this.start_0_i(),this.start_1_i(),this.start_2_i(),this.start_3_i(),this.start_4_i(),this._Image3_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this.btn_shop1_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.source = "bar_info_di_29_png";
		t.width = 194;
		t.x = -14.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91;
		t.source = "stand_horse_png";
		t.width = 91.8;
		t.x = 38.1;
		t.y = 66;
		return t;
	};
	_proto.img_head_bg0_i = function () {
		var t = new eui.Image();
		this.img_head_bg0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 35.4;
		t.x = 6.45;
		t.y = -0.81;
		return t;
	};
	_proto.horse_lv_img0_i = function () {
		var t = new eui.Image();
		this.horse_lv_img0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.08;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 22.84;
		t.x = 13.72;
		t.y = 5.34;
		return t;
	};
	_proto.select_2_img0_i = function () {
		var t = new eui.Image();
		this.select_2_img0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 277.43;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "selec10_s_png";
		t.width = 202.84;
		t.x = -18.42;
		t.y = -20.34;
		return t;
	};
	_proto.start_6_i = function () {
		var t = new eui.Image();
		this.start_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 59.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_0_i = function () {
		var t = new eui.Image();
		this.start_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 72.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_1_i = function () {
		var t = new eui.Image();
		this.start_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 85.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_2_i = function () {
		var t = new eui.Image();
		this.start_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 98.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_3_i = function () {
		var t = new eui.Image();
		this.start_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 111.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_4_i = function () {
		var t = new eui.Image();
		this.start_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 13.5;
		t.x = 140.5;
		t.y = 8.36;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "bar_info_di_28_png";
		t.width = 177;
		t.x = -2;
		t.y = 195;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 12;
		t.text = "Echo RAMBO";
		t.textAlign = "center";
		t.textColor = 0xEDD3D3;
		t.verticalAlign = "middle";
		t.width = 94.25;
		t.x = 46.25;
		t.y = 10.29;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.25;
		t.size = 18;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 73;
		t.y = 197.63;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "#111";
		t.textAlign = "right";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 68.05;
		t.x = 11.95;
		t.y = 174;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "686";
		t.textAlign = "left";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 51.05;
		t.x = 100;
		t.y = 174;
		return t;
	};
	_proto.btn_shop1_i = function () {
		var t = new eui.Button();
		this.btn_shop1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 43;
		t.y = 204;
		t.skinName = LoginUI$Skin54;
		return t;
	};
	_proto.group_0_i = function () {
		var t = new eui.Group();
		this.group_0 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 285.95;
		t.y = 77.01;
		t.elementsContent = [this._Image4_i(),this._Image5_i(),this.img_head_bg1_i(),this.horse_lv_img1_i(),this.select_2_img1_i(),this.start_5_i(),this.start_7_i(),this.start_8_i(),this.start_9_i(),this.start_10_i(),this.start_11_i(),this._Image6_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this.btn_shop0_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.source = "bar_info_di_29_png";
		t.width = 194;
		t.x = -14.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91;
		t.source = "stand_horse_png";
		t.width = 91.8;
		t.x = 38.1;
		t.y = 66;
		return t;
	};
	_proto.img_head_bg1_i = function () {
		var t = new eui.Image();
		this.img_head_bg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 35.4;
		t.x = 6.45;
		t.y = -0.81;
		return t;
	};
	_proto.horse_lv_img1_i = function () {
		var t = new eui.Image();
		this.horse_lv_img1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.08;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 22.84;
		t.x = 13.72;
		t.y = 5.34;
		return t;
	};
	_proto.select_2_img1_i = function () {
		var t = new eui.Image();
		this.select_2_img1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 277.43;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "selec10_s_png";
		t.visible = false;
		t.width = 202.84;
		t.x = -18.42;
		t.y = -20.34;
		return t;
	};
	_proto.start_5_i = function () {
		var t = new eui.Image();
		this.start_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 59.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_7_i = function () {
		var t = new eui.Image();
		this.start_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 72.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_8_i = function () {
		var t = new eui.Image();
		this.start_8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 85.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_9_i = function () {
		var t = new eui.Image();
		this.start_9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 98.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_10_i = function () {
		var t = new eui.Image();
		this.start_10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 111.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_11_i = function () {
		var t = new eui.Image();
		this.start_11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 13.5;
		t.x = 140.5;
		t.y = 8.36;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "bar_info_di_28_png";
		t.width = 177;
		t.x = -2;
		t.y = 195;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 12;
		t.text = "Echo RAMBO";
		t.textAlign = "center";
		t.textColor = 0xEDD3D3;
		t.verticalAlign = "middle";
		t.width = 94.25;
		t.x = 46.25;
		t.y = 10.29;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.25;
		t.size = 18;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 73;
		t.y = 197.63;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "#111";
		t.textAlign = "right";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 68.05;
		t.x = 11.95;
		t.y = 174;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "686";
		t.textAlign = "left";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 51.05;
		t.x = 100;
		t.y = 174;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 43;
		t.y = 204;
		t.skinName = LoginUI$Skin55;
		return t;
	};
	_proto.group_2_i = function () {
		var t = new eui.Group();
		this.group_2 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 499.68;
		t.y = 77.58;
		t.elementsContent = [this._Image7_i(),this._Image8_i(),this.img_head_bg2_i(),this.horse_lv_img2_i(),this.select_2_img2_i(),this.start_12_i(),this.start_13_i(),this.start_14_i(),this.start_15_i(),this.start_16_i(),this.start_17_i(),this._Image9_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this.btn_shop2_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.source = "bar_info_di_29_png";
		t.width = 194;
		t.x = -14.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91;
		t.source = "stand_horse_png";
		t.width = 91.8;
		t.x = 38.1;
		t.y = 66;
		return t;
	};
	_proto.img_head_bg2_i = function () {
		var t = new eui.Image();
		this.img_head_bg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 35.4;
		t.x = 6.45;
		t.y = -0.81;
		return t;
	};
	_proto.horse_lv_img2_i = function () {
		var t = new eui.Image();
		this.horse_lv_img2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.08;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 22.84;
		t.x = 13.72;
		t.y = 5.34;
		return t;
	};
	_proto.select_2_img2_i = function () {
		var t = new eui.Image();
		this.select_2_img2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 277.43;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "selec10_s_png";
		t.visible = false;
		t.width = 202.84;
		t.x = -18.42;
		t.y = -20.34;
		return t;
	};
	_proto.start_12_i = function () {
		var t = new eui.Image();
		this.start_12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 59.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_13_i = function () {
		var t = new eui.Image();
		this.start_13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 72.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_14_i = function () {
		var t = new eui.Image();
		this.start_14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 85.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_15_i = function () {
		var t = new eui.Image();
		this.start_15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 98.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_16_i = function () {
		var t = new eui.Image();
		this.start_16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 111.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_17_i = function () {
		var t = new eui.Image();
		this.start_17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 13.5;
		t.x = 140.5;
		t.y = 8.36;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "bar_info_di_28_png";
		t.width = 177;
		t.x = -2;
		t.y = 195;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 12;
		t.text = "Echo RAMBO";
		t.textAlign = "center";
		t.textColor = 0xEDD3D3;
		t.verticalAlign = "middle";
		t.width = 94.25;
		t.x = 46.25;
		t.y = 10.29;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.25;
		t.size = 18;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 73;
		t.y = 197.63;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "#111";
		t.textAlign = "right";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 68.05;
		t.x = 11.95;
		t.y = 174;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "686";
		t.textAlign = "left";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 51.05;
		t.x = 100;
		t.y = 174;
		return t;
	};
	_proto.btn_shop2_i = function () {
		var t = new eui.Button();
		this.btn_shop2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 43;
		t.y = 204;
		t.skinName = LoginUI$Skin56;
		return t;
	};
	_proto.group_3_i = function () {
		var t = new eui.Group();
		this.group_3 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 73.47;
		t.y = 354.44;
		t.elementsContent = [this._Image10_i(),this._Image11_i(),this.img_head_bg3_i(),this.horse_lv_img3_i(),this.select_2_img3_i(),this.start_18_i(),this.start_19_i(),this.start_20_i(),this.start_21_i(),this.start_22_i(),this.start_23_i(),this._Image12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this.btn_shop3_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.source = "bar_info_di_29_png";
		t.width = 194;
		t.x = -14.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91;
		t.source = "stand_horse_png";
		t.width = 91.8;
		t.x = 38.1;
		t.y = 66;
		return t;
	};
	_proto.img_head_bg3_i = function () {
		var t = new eui.Image();
		this.img_head_bg3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 35.4;
		t.x = 6.45;
		t.y = -0.81;
		return t;
	};
	_proto.horse_lv_img3_i = function () {
		var t = new eui.Image();
		this.horse_lv_img3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.08;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 22.84;
		t.x = 13.72;
		t.y = 5.34;
		return t;
	};
	_proto.select_2_img3_i = function () {
		var t = new eui.Image();
		this.select_2_img3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 277.43;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "selec10_s_png";
		t.visible = false;
		t.width = 202.84;
		t.x = -18.42;
		t.y = -20.34;
		return t;
	};
	_proto.start_18_i = function () {
		var t = new eui.Image();
		this.start_18 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 59.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_19_i = function () {
		var t = new eui.Image();
		this.start_19 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 72.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_20_i = function () {
		var t = new eui.Image();
		this.start_20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 85.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_21_i = function () {
		var t = new eui.Image();
		this.start_21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 98.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_22_i = function () {
		var t = new eui.Image();
		this.start_22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 111.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_23_i = function () {
		var t = new eui.Image();
		this.start_23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 13.5;
		t.x = 140.5;
		t.y = 8.36;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "bar_info_di_28_png";
		t.width = 177;
		t.x = -2;
		t.y = 195;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 12;
		t.text = "Echo RAMBO";
		t.textAlign = "center";
		t.textColor = 0xEDD3D3;
		t.verticalAlign = "middle";
		t.width = 94.25;
		t.x = 46.25;
		t.y = 10.29;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.25;
		t.size = 18;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 73;
		t.y = 197.63;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "#111";
		t.textAlign = "right";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 68.05;
		t.x = 11.95;
		t.y = 174;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "686";
		t.textAlign = "left";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 51.05;
		t.x = 100;
		t.y = 174;
		return t;
	};
	_proto.btn_shop3_i = function () {
		var t = new eui.Button();
		this.btn_shop3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 43;
		t.y = 204;
		t.skinName = LoginUI$Skin57;
		return t;
	};
	_proto.group_4_i = function () {
		var t = new eui.Group();
		this.group_4 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 285.44;
		t.y = 355.15;
		t.elementsContent = [this._Image13_i(),this._Image14_i(),this.img_head_bg4_i(),this.horse_lv_img4_i(),this.select_2_img4_i(),this.start_24_i(),this.start_25_i(),this.start_26_i(),this.start_27_i(),this.start_28_i(),this.start_29_i(),this._Image15_i(),this._Label17_i(),this._Label18_i(),this._Label19_i(),this._Label20_i(),this.btn_shop4_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.source = "bar_info_di_29_png";
		t.width = 194;
		t.x = -14.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91;
		t.source = "stand_horse_png";
		t.width = 91.8;
		t.x = 38.1;
		t.y = 66;
		return t;
	};
	_proto.img_head_bg4_i = function () {
		var t = new eui.Image();
		this.img_head_bg4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 35.4;
		t.x = 6.45;
		t.y = -0.81;
		return t;
	};
	_proto.horse_lv_img4_i = function () {
		var t = new eui.Image();
		this.horse_lv_img4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.08;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 22.84;
		t.x = 13.72;
		t.y = 5.34;
		return t;
	};
	_proto.select_2_img4_i = function () {
		var t = new eui.Image();
		this.select_2_img4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 277.43;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "selec10_s_png";
		t.visible = false;
		t.width = 202.84;
		t.x = -18.42;
		t.y = -20.34;
		return t;
	};
	_proto.start_24_i = function () {
		var t = new eui.Image();
		this.start_24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 59.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_25_i = function () {
		var t = new eui.Image();
		this.start_25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 72.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_26_i = function () {
		var t = new eui.Image();
		this.start_26 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 85.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_27_i = function () {
		var t = new eui.Image();
		this.start_27 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 98.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_28_i = function () {
		var t = new eui.Image();
		this.start_28 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 111.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_29_i = function () {
		var t = new eui.Image();
		this.start_29 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 13.5;
		t.x = 140.5;
		t.y = 8.36;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "bar_info_di_28_png";
		t.width = 177;
		t.x = -2;
		t.y = 195;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 12;
		t.text = "Echo RAMBO";
		t.textAlign = "center";
		t.textColor = 0xEDD3D3;
		t.verticalAlign = "middle";
		t.width = 94.25;
		t.x = 46.25;
		t.y = 10.29;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.25;
		t.size = 18;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 73;
		t.y = 197.63;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "#111";
		t.textAlign = "right";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 68.05;
		t.x = 11.95;
		t.y = 174;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "686";
		t.textAlign = "left";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 51.05;
		t.x = 100;
		t.y = 174;
		return t;
	};
	_proto.btn_shop4_i = function () {
		var t = new eui.Button();
		this.btn_shop4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 43;
		t.y = 204;
		t.skinName = LoginUI$Skin58;
		return t;
	};
	_proto.group_5_i = function () {
		var t = new eui.Group();
		this.group_5 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 499.17;
		t.y = 355.72;
		t.elementsContent = [this._Image16_i(),this._Image17_i(),this.img_head_bg5_i(),this.horse_lv_img5_i(),this.select_2_img5_i(),this.start_30_i(),this.start_31_i(),this.start_32_i(),this.start_33_i(),this.start_34_i(),this.start_35_i(),this._Image18_i(),this._Label21_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this.btn_shop5_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 266;
		t.source = "bar_info_di_29_png";
		t.width = 194;
		t.x = -14.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91;
		t.source = "stand_horse_png";
		t.width = 91.8;
		t.x = 38.1;
		t.y = 66;
		return t;
	};
	_proto.img_head_bg5_i = function () {
		var t = new eui.Image();
		this.img_head_bg5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 35.4;
		t.x = 6.45;
		t.y = -0.81;
		return t;
	};
	_proto.horse_lv_img5_i = function () {
		var t = new eui.Image();
		this.horse_lv_img5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24.08;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 22.84;
		t.x = 13.72;
		t.y = 5.34;
		return t;
	};
	_proto.select_2_img5_i = function () {
		var t = new eui.Image();
		this.select_2_img5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 277.43;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "selec10_s_png";
		t.visible = false;
		t.width = 202.84;
		t.x = -18.42;
		t.y = -20.34;
		return t;
	};
	_proto.start_30_i = function () {
		var t = new eui.Image();
		this.start_30 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 59.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_31_i = function () {
		var t = new eui.Image();
		this.start_31 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 72.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_32_i = function () {
		var t = new eui.Image();
		this.start_32 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 85.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_33_i = function () {
		var t = new eui.Image();
		this.start_33 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 98.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_34_i = function () {
		var t = new eui.Image();
		this.start_34 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 17;
		t.x = 111.5;
		t.y = 24.63;
		return t;
	};
	_proto.start_35_i = function () {
		var t = new eui.Image();
		this.start_35 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 13.5;
		t.x = 140.5;
		t.y = 8.36;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "bar_info_di_28_png";
		t.width = 177;
		t.x = -2;
		t.y = 195;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 12;
		t.text = "Echo RAMBO";
		t.textAlign = "center";
		t.textColor = 0xEDD3D3;
		t.verticalAlign = "middle";
		t.width = 94.25;
		t.x = 46.25;
		t.y = 10.29;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37.25;
		t.size = 18;
		t.text = "123456";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 73;
		t.y = 197.63;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "#111";
		t.textAlign = "right";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 68.05;
		t.x = 11.95;
		t.y = 174;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 26.25;
		t.size = 14;
		t.text = "686";
		t.textAlign = "left";
		t.textColor = 0x68625D;
		t.verticalAlign = "middle";
		t.width = 51.05;
		t.x = 100;
		t.y = 174;
		return t;
	};
	_proto.btn_shop5_i = function () {
		var t = new eui.Button();
		this.btn_shop5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 43;
		t.y = 204;
		t.skinName = LoginUI$Skin59;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Merge_fail.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["merge_fail_icon","merge_fail_title_img","merge_fail_confirm"];
		
		this.height = 755;
		this.width = 400;
		this.elementsContent = [this.merge_fail_icon_i(),this.merge_fail_title_img_i(),this._Image1_i(),this.merge_fail_confirm_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.merge_fail_icon_i = function () {
		var t = new eui.Image();
		this.merge_fail_icon = t;
		t.height = 287;
		t.name = "merge_fail_icon";
		t.source = "icon_merge2_png";
		t.width = 313;
		t.x = 43.5;
		t.y = 214;
		return t;
	};
	_proto.merge_fail_title_img_i = function () {
		var t = new eui.Image();
		this.merge_fail_title_img = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.name = "merge_fail_title_img";
		t.source = "icon_failure_png";
		t.width = 304;
		t.x = 52.5;
		t.y = 125;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.source = "btn_info1_png";
		t.width = 147;
		t.x = 126.5;
		t.y = 579;
		return t;
	};
	_proto.merge_fail_confirm_i = function () {
		var t = new eui.Image();
		this.merge_fail_confirm = t;
		t.height = 28;
		t.name = "merge_fail_confirm";
		t.source = "icon_confirm_png";
		t.width = 123;
		t.x = 137.5;
		t.y = 592;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Merge_Right.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	var NoticeGroup$Skin60 = 	(function (_super) {
		__extends(NoticeGroup$Skin60, _super);
		function NoticeGroup$Skin60() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin60.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin60;
	})(eui.Skin);

	var NoticeGroup$Skin61 = 	(function (_super) {
		__extends(NoticeGroup$Skin61, _super);
		function NoticeGroup$Skin61() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin61.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin61;
	})(eui.Skin);

	var NoticeGroup$Skin62 = 	(function (_super) {
		__extends(NoticeGroup$Skin62, _super);
		function NoticeGroup$Skin62() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin62.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "GRADE-CHANCE_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin62;
	})(eui.Skin);

	var NoticeGroup$Skin63 = 	(function (_super) {
		__extends(NoticeGroup$Skin63, _super);
		function NoticeGroup$Skin63() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin63.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin63;
	})(eui.Skin);

	var NoticeGroup$Skin64 = 	(function (_super) {
		__extends(NoticeGroup$Skin64, _super);
		function NoticeGroup$Skin64() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin64.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin64;
	})(eui.Skin);

	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["merge_title_img","img_head_bg0","horse_lv_img","horse_name_lb","img_head_bg1","horse_lv_img0","horse_name_lb0","stallion_flag_img","mare_flag_img","horse_name_lb1","horse_name_lb2","horse_name_lb3","horse_name_lb4","horse_name_lb5","horse_name_lb6","left_stallion_bg_img","left_pre_horse_img","left_next_horse_img","left_stallion_lb","right_mare_lb","btn_shop0","main_coin_num_lb","btn_shop1","btn_shop4","main_coin_num_lb0","btn_shop2","main_coin_num_lb1","btn_shop3","main_coin_num_lb2","left_horse_stat_lb","left_horse_skill_lb","left_horse_pedigree_lb","right_horse_stat_lb","right_horse_skill_lb","merge_btn_lb","advanced_merge_btn_lb","right_horse_pedigree_lb","left_group_stat","right_group_stat","left_skill_group","right_skill_group","left_pedigree_group","right_pedigree_group"];
		
		this.height = 739;
		this.width = 1130;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.merge_title_img_i(),this._Image4_i(),this.img_head_bg0_i(),this.horse_lv_img_i(),this._Image5_i(),this.horse_name_lb_i(),this.img_head_bg1_i(),this.horse_lv_img0_i(),this._Image6_i(),this.horse_name_lb0_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this.stallion_flag_img_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this.mare_flag_img_i(),this.horse_name_lb1_i(),this.horse_name_lb2_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Label1_i(),this._Image22_i(),this.horse_name_lb3_i(),this._Image23_i(),this._Label2_i(),this._Image24_i(),this.horse_name_lb4_i(),this._Image25_i(),this._Label3_i(),this._Image26_i(),this.horse_name_lb5_i(),this._Image27_i(),this._Label4_i(),this._Image28_i(),this.horse_name_lb6_i(),this.left_stallion_bg_img_i(),this.left_pre_horse_img_i(),this.left_next_horse_img_i(),this.left_stallion_lb_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this.right_mare_lb_i(),this._Image32_i(),this.btn_shop0_i(),this.main_coin_num_lb_i(),this.btn_shop1_i(),this.btn_shop4_i(),this.main_coin_num_lb0_i(),this._Image33_i(),this._Image34_i(),this.btn_shop2_i(),this.main_coin_num_lb1_i(),this.btn_shop3_i(),this.main_coin_num_lb2_i(),this._Image35_i(),this.left_horse_stat_lb_i(),this.left_horse_skill_lb_i(),this.left_horse_pedigree_lb_i(),this.right_horse_stat_lb_i(),this.right_horse_skill_lb_i(),this.merge_btn_lb_i(),this.advanced_merge_btn_lb_i(),this.right_horse_pedigree_lb_i(),this.left_group_stat_i(),this.right_group_stat_i(),this.left_skill_group_i(),this.right_skill_group_i(),this.left_pedigree_group_i(),this.right_pedigree_group_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 346;
		t.source = "left_horse_png";
		t.width = 372;
		t.x = 11.87;
		t.y = 148.27;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 346;
		t.source = "right_horse_png";
		t.width = 372;
		t.x = 717.48;
		t.y = 154.35;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 739;
		t.source = "bar_info_di_8_png";
		t.width = 323.18;
		t.x = 392.97;
		t.y = 0;
		return t;
	};
	_proto.merge_title_img_i = function () {
		var t = new eui.Image();
		this.merge_title_img = t;
		t.height = 32;
		t.name = "merge_title_img";
		t.source = "MERGEING_png";
		t.width = 206;
		t.x = 452.89;
		t.y = 63.3;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 129;
		t.source = "tx_UNK_1_png";
		t.width = 130;
		t.x = 489.81;
		t.y = 269.61;
		return t;
	};
	_proto.img_head_bg0_i = function () {
		var t = new eui.Image();
		this.img_head_bg0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 48;
		t.x = 32.76;
		t.y = 94.02;
		return t;
	};
	_proto.horse_lv_img_i = function () {
		var t = new eui.Image();
		this.horse_lv_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30.52;
		t.name = "horse_lv_img";
		t.source = "icon_level_d_png";
		t.width = 22.62;
		t.x = 45.47;
		t.y = 102.63;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.source = "bar_name_di_png";
		t.width = 322;
		t.x = 34.36;
		t.y = 82.93;
		return t;
	};
	_proto.horse_name_lb_i = function () {
		var t = new eui.Label();
		this.horse_name_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.name = "horse_name_lb";
		t.size = 32;
		t.strokeColor = 0xC63B3B;
		t.text = "Ferrari";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 238.24;
		t.x = 78.96;
		t.y = 79.95;
		return t;
	};
	_proto.img_head_bg1_i = function () {
		var t = new eui.Image();
		this.img_head_bg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 48;
		t.x = 753.52;
		t.y = 90.39;
		return t;
	};
	_proto.horse_lv_img0_i = function () {
		var t = new eui.Image();
		this.horse_lv_img0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30.52;
		t.name = "horse_lv_img";
		t.source = "icon_level_d_png";
		t.width = 22.62;
		t.x = 766.23;
		t.y = 99;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.source = "bar_name_di_png";
		t.width = 322;
		t.x = 755.12;
		t.y = 80.82;
		return t;
	};
	_proto.horse_name_lb0_i = function () {
		var t = new eui.Label();
		this.horse_name_lb0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.name = "horse_name_lb";
		t.size = 32;
		t.strokeColor = 0xC63B3B;
		t.text = "Ferrari";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 244.3;
		t.x = 804.27;
		t.y = 79.95;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 647.15;
		t.source = "bar_info_di1_png";
		t.width = 362;
		t.x = 17.33;
		t.y = 454.92;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "bar_info_di_3_png";
		t.width = 362;
		t.x = 18.19;
		t.y = 457;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 641.09;
		t.source = "bar_info_di1_png";
		t.width = 362;
		t.x = 743.09;
		t.y = 460.98;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "bar_info_di_3_png";
		t.width = 362;
		t.x = 743.09;
		t.y = 457;
		return t;
	};
	_proto.stallion_flag_img_i = function () {
		var t = new eui.Image();
		this.stallion_flag_img = t;
		t.height = 46;
		t.name = "stallion_flag_img";
		t.source = "icon_Male_png";
		t.width = 37;
		t.x = 310.35;
		t.y = 92.39;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(4,0,3,6);
		t.source = "sign_point_2_png";
		t.width = 10;
		t.x = 632.46;
		t.y = 180.77;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 150;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(4,0,3,6);
		t.source = "sign_point_2_png";
		t.width = 10;
		t.x = 635.22;
		t.y = 419.31;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 120;
		t.scale9Grid = new egret.Rectangle(5,0,12,5);
		t.source = "sign_point_1_png";
		t.width = 20;
		t.x = 545;
		t.y = 186.77;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.rotation = 180;
		t.scale9Grid = new egret.Rectangle(5,0,12,5);
		t.source = "sign_point_1_png";
		t.width = 20;
		t.x = 565.06;
		t.y = 424.31;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 38;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(5,0,12,5);
		t.source = "sign_point_1_png";
		t.width = 20;
		t.x = 474.38;
		t.y = 423.51;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 38;
		t.rotation = 0;
		t.scale9Grid = new egret.Rectangle(5,0,12,5);
		t.source = "sign_point_1_png";
		t.width = 20;
		t.x = 625.22;
		t.y = 423.51;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.source = "icon_stars2_png";
		t.width = 80;
		t.x = 415.89;
		t.y = 148.27;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.height = 80;
		t.source = "icon_stars2_png";
		t.width = 80;
		t.x = 618.89;
		t.y = 148.27;
		return t;
	};
	_proto.mare_flag_img_i = function () {
		var t = new eui.Image();
		this.mare_flag_img = t;
		t.height = 46;
		t.name = "mare_flag_img";
		t.source = "icon_female_png";
		t.width = 37;
		t.x = 1035.19;
		t.y = 91.91;
		return t;
	};
	_proto.horse_name_lb1_i = function () {
		var t = new eui.Label();
		this.horse_name_lb1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75.55;
		t.name = "horse_name_lb";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0xC63B3B;
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 101.88;
		t.x = 403.47;
		t.y = 150.94;
		return t;
	};
	_proto.horse_name_lb2_i = function () {
		var t = new eui.Label();
		this.horse_name_lb2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75.55;
		t.name = "horse_name_lb";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0xC63B3B;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 101.88;
		t.x = 607.95;
		t.y = 152.72;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124.45;
		t.source = "tx_UNK_2_png";
		t.width = 125.96;
		t.x = 492.02;
		t.y = 272.65;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 124.45;
		t.source = "tx_UNK_3_png";
		t.width = 126.96;
		t.x = 491.38;
		t.y = 268.97;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129;
		t.source = "bar_info_di_10_png";
		t.width = 70;
		t.x = 408.88;
		t.y = 475;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 16;
		t.text = "35%";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 51;
		t.x = 418.38;
		t.y = 475;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "icon_stars2_png";
		t.width = 60;
		t.x = 412.96;
		t.y = 509;
		return t;
	};
	_proto.horse_name_lb3_i = function () {
		var t = new eui.Label();
		this.horse_name_lb3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.55;
		t.name = "horse_name_lb";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0xC63B3B;
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81.88;
		t.x = 400.54;
		t.y = 511.67;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129;
		t.source = "bar_info_di_10_png";
		t.width = 70;
		t.x = 482.82;
		t.y = 475;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 16;
		t.text = "65%";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 51;
		t.x = 495.9;
		t.y = 475.01;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "icon_stars2_png";
		t.width = 60;
		t.x = 486.9;
		t.y = 508.12;
		return t;
	};
	_proto.horse_name_lb4_i = function () {
		var t = new eui.Label();
		this.horse_name_lb4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.55;
		t.name = "horse_name_lb";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0xC63B3B;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81.88;
		t.x = 474.48;
		t.y = 510.79;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129;
		t.source = "bar_info_di_10_png";
		t.width = 70;
		t.x = 566.32;
		t.y = 475;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 16;
		t.text = "65%";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 51;
		t.x = 579.4;
		t.y = 475.01;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "icon_stars2_png";
		t.width = 60;
		t.x = 570.4;
		t.y = 506.41;
		return t;
	};
	_proto.horse_name_lb5_i = function () {
		var t = new eui.Label();
		this.horse_name_lb5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.55;
		t.name = "horse_name_lb";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0xC63B3B;
		t.text = "2";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81.88;
		t.x = 557.98;
		t.y = 509.08;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 129;
		t.source = "bar_info_di_10_png";
		t.width = 70;
		t.x = 640.26;
		t.y = 475;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.size = 16;
		t.text = "35%";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 51;
		t.x = 649.36;
		t.y = 475.13;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "icon_stars2_png";
		t.width = 60;
		t.x = 644.34;
		t.y = 505.53;
		return t;
	};
	_proto.horse_name_lb6_i = function () {
		var t = new eui.Label();
		this.horse_name_lb6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.55;
		t.name = "horse_name_lb";
		t.size = 32;
		t.stroke = 2;
		t.strokeColor = 0xC63B3B;
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 81.88;
		t.x = 631.92;
		t.y = 508.2;
		return t;
	};
	_proto.left_stallion_bg_img_i = function () {
		var t = new eui.Image();
		this.left_stallion_bg_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.67;
		t.name = "left_stallion_bg_img";
		t.source = "bar_txopt_di_2_png";
		t.width = 206;
		t.x = 92.98;
		t.y = 702.31;
		return t;
	};
	_proto.left_pre_horse_img_i = function () {
		var t = new eui.Image();
		this.left_pre_horse_img = t;
		t.height = 34;
		t.name = "left_pre_horse_img";
		t.source = "btn_point2_d_png";
		t.width = 41;
		t.x = 108.34;
		t.y = 699.67;
		return t;
	};
	_proto.left_next_horse_img_i = function () {
		var t = new eui.Image();
		this.left_next_horse_img = t;
		t.height = 34;
		t.name = "left_next_horse_img";
		t.skewY = -180;
		t.source = "btn_point2_png";
		t.width = 41;
		t.x = 286.52;
		t.y = 699.69;
		return t;
	};
	_proto.left_stallion_lb_i = function () {
		var t = new eui.Label();
		this.left_stallion_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41.67;
		t.name = "left_stallion_lb";
		t.size = 16;
		t.strokeColor = 0xC63B3B;
		t.text = "stallion 1/3";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 108.9;
		t.x = 143.11;
		t.y = 698.53;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.67;
		t.source = "bar_txopt_di_2_png";
		t.width = 206;
		t.x = 818.37;
		t.y = 702.96;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 34;
		t.source = "btn_point2_d_png";
		t.width = 41;
		t.x = 833.73;
		t.y = 700.32;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 34;
		t.skewY = -180;
		t.source = "btn_point2_png";
		t.width = 41;
		t.x = 1011.91;
		t.y = 700.34;
		return t;
	};
	_proto.right_mare_lb_i = function () {
		var t = new eui.Label();
		this.right_mare_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41.67;
		t.name = "right_mare_lb";
		t.size = 16;
		t.strokeColor = 0xC63B3B;
		t.text = "mare 1/3";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 108.9;
		t.x = 868.5;
		t.y = 699.18;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.34;
		t.scale9Grid = new egret.Rectangle(7,7,94,10);
		t.source = "bar_info_di_12_png";
		t.width = 148;
		t.x = 407.68;
		t.y = 622.97;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 414.29;
		t.y = 626.35;
		t.skinName = NoticeGroup$Skin60;
		return t;
	};
	_proto.main_coin_num_lb_i = function () {
		var t = new eui.Label();
		this.main_coin_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "main_coin_num_lb";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.size = 26;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 439.09;
		t.y = 631;
		return t;
	};
	_proto.btn_shop1_i = function () {
		var t = new eui.Button();
		this.btn_shop1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 479.91;
		t.y = 626.87;
		t.skinName = NoticeGroup$Skin61;
		return t;
	};
	_proto.btn_shop4_i = function () {
		var t = new eui.Button();
		this.btn_shop4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 118;
		t.x = 523.08;
		t.y = 440.91;
		t.skinName = NoticeGroup$Skin62;
		return t;
	};
	_proto.main_coin_num_lb0_i = function () {
		var t = new eui.Label();
		this.main_coin_num_lb0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "main_coin_num_lb";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.size = 26;
		t.text = "2";
		t.textAlign = "left";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 505.48;
		t.y = 631;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.height = 58;
		t.source = "btn_info1_png";
		t.width = 147;
		t.x = 407.68;
		t.y = 660.02;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.34;
		t.scale9Grid = new egret.Rectangle(7,7,94,10);
		t.source = "bar_info_di_12_png";
		t.width = 148;
		t.x = 559.64;
		t.y = 623.45;
		return t;
	};
	_proto.btn_shop2_i = function () {
		var t = new eui.Button();
		this.btn_shop2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 566.25;
		t.y = 626.83;
		t.skinName = NoticeGroup$Skin63;
		return t;
	};
	_proto.main_coin_num_lb1_i = function () {
		var t = new eui.Label();
		this.main_coin_num_lb1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "main_coin_num_lb";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.size = 26;
		t.text = "2";
		t.textAlign = "left";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 591.05;
		t.y = 631;
		return t;
	};
	_proto.btn_shop3_i = function () {
		var t = new eui.Button();
		this.btn_shop3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 631.87;
		t.y = 627.35;
		t.skinName = NoticeGroup$Skin64;
		return t;
	};
	_proto.main_coin_num_lb2_i = function () {
		var t = new eui.Label();
		this.main_coin_num_lb2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "main_coin_num_lb";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.size = 26;
		t.text = "4";
		t.textAlign = "left";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 657.44;
		t.y = 631;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.height = 58;
		t.source = "btn_info1_png";
		t.width = 147;
		t.x = 559.64;
		t.y = 660.5;
		return t;
	};
	_proto.left_horse_stat_lb_i = function () {
		var t = new eui.Image();
		this.left_horse_stat_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "left_horse_stat_lb";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stats_s_png";
		t.width = 59;
		t.x = 69.84;
		t.y = 435.84;
		return t;
	};
	_proto.left_horse_skill_lb_i = function () {
		var t = new eui.Image();
		this.left_horse_skill_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "left_horse_skill_lb";
		t.source = "icon_skill_n_png";
		t.width = 59;
		t.x = 169.69;
		t.y = 436.36;
		return t;
	};
	_proto.left_horse_pedigree_lb_i = function () {
		var t = new eui.Image();
		this.left_horse_pedigree_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79.33;
		t.name = "left_horse_pedigree_lb";
		t.source = "icon_pedigree_n_png";
		t.width = 59;
		t.x = 271.06;
		t.y = 443.36;
		return t;
	};
	_proto.right_horse_stat_lb_i = function () {
		var t = new eui.Image();
		this.right_horse_stat_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "right_horse_stat_lb";
		t.source = "icon_stats_s_png";
		t.width = 59;
		t.x = 791.16;
		t.y = 436.66;
		return t;
	};
	_proto.right_horse_skill_lb_i = function () {
		var t = new eui.Image();
		this.right_horse_skill_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "right_horse_skill_lb";
		t.source = "icon_skill_n_png";
		t.width = 59;
		t.x = 891.01;
		t.y = 437.18;
		return t;
	};
	_proto.merge_btn_lb_i = function () {
		var t = new eui.Label();
		this.merge_btn_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.34;
		t.name = "merge_btn_lb";
		t.size = 18;
		t.strokeColor = 0xC63B3B;
		t.text = "Merge";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 130.24;
		t.x = 414.82;
		t.y = 658.69;
		return t;
	};
	_proto.advanced_merge_btn_lb_i = function () {
		var t = new eui.Label();
		this.advanced_merge_btn_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56.34;
		t.name = "advanced_merge_btn_lb";
		t.size = 18;
		t.strokeColor = 0xC63B3B;
		t.text = "Advanced\nMerge";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 130.24;
		t.x = 570.12;
		t.y = 659.05;
		return t;
	};
	_proto.right_horse_pedigree_lb_i = function () {
		var t = new eui.Image();
		this.right_horse_pedigree_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79.33;
		t.name = "right_horse_pedigree_lb";
		t.source = "icon_pedigree_n_png";
		t.width = 59;
		t.x = 992.38;
		t.y = 444.18;
		return t;
	};
	_proto.left_group_stat_i = function () {
		var t = new eui.Group();
		this.left_group_stat = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.42;
		t.name = "left_group_stat";
		t.width = 95.46;
		t.x = 18;
		t.y = 516.84;
		t.elementsContent = [this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Image41_i(),this._Image42_i(),this._Image43_i(),this._Image44_i(),this._Image45_i(),this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i(),this._Image50_i(),this._Image51_i(),this._Image52_i(),this._Image53_i()];
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_Stamina_png";
		t.width = 44;
		t.x = 25.69;
		t.y = 79.36;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_start_png";
		t.width = 44;
		t.x = 114.35;
		t.y = 79.36;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_wisdom_png";
		t.width = 44;
		t.x = 204.73;
		t.y = 79.36;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_constitution_png";
		t.width = 44;
		t.x = 294.01;
		t.y = 79.36;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_Splitline_1_png";
		t.width = 346;
		t.x = 3.69;
		t.y = 132.36;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 16.71;
		t.y = 146.2;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 195.31;
		t.y = 146.2;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.textColor = 0x18A4DB;
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 104.21;
		t.y = 146.2;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.textColor = 0x18A4DB;
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 282.56;
		t.y = 144.68;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_info_di2_png";
		t.width = 349;
		t.x = 6.69;
		t.y = 63.36;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_strength_png";
		t.width = 65;
		t.x = 19.16;
		t.y = 8;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 72.21;
		t.y = 13;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 72.21;
		t.y = 13;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_speed_png";
		t.width = 65;
		t.x = 18.18;
		t.y = 30;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 71.23;
		t.y = 35;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 71.23;
		t.y = 35;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_Decterous_png";
		t.width = 65;
		t.x = 184.77;
		t.y = 9.34;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 237.82;
		t.y = 14.34;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 237.82;
		t.y = 14.34;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_burst_png";
		t.width = 65;
		t.x = 184.76;
		t.y = 28.34;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 237.81;
		t.y = 33.34;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 237.81;
		t.y = 33.34;
		return t;
	};
	_proto.right_group_stat_i = function () {
		var t = new eui.Group();
		this.right_group_stat = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.42;
		t.name = "right_group_stat";
		t.width = 95.46;
		t.x = 745.75;
		t.y = 516.02;
		t.elementsContent = [this._Image54_i(),this._Image55_i(),this._Image56_i(),this._Image57_i(),this._Image58_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Image59_i(),this._Image60_i(),this._Image61_i(),this._Image62_i(),this._Image63_i(),this._Image64_i(),this._Image65_i(),this._Image66_i(),this._Image67_i(),this._Image68_i(),this._Image69_i(),this._Image70_i(),this._Image71_i()];
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_Stamina_png";
		t.width = 44;
		t.x = 25.69;
		t.y = 79.36;
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_start_png";
		t.width = 44;
		t.x = 114.35;
		t.y = 79.36;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_wisdom_png";
		t.width = 44;
		t.x = 204.73;
		t.y = 79.36;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_constitution_png";
		t.width = 44;
		t.x = 294.01;
		t.y = 79.36;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.height = 2;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_Splitline_1_png";
		t.width = 346;
		t.x = 3.69;
		t.y = 132.36;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 16.71;
		t.y = 146.2;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 195.31;
		t.y = 146.2;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.textColor = 0x18A4DB;
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 104.21;
		t.y = 146.2;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.textColor = 0x18A4DB;
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 282.56;
		t.y = 144.68;
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_info_di2_png";
		t.width = 349;
		t.x = 6.69;
		t.y = 63.36;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_strength_png";
		t.width = 65;
		t.x = 19.16;
		t.y = 8;
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 72.21;
		t.y = 13;
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 72.21;
		t.y = 13;
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_speed_png";
		t.width = 65;
		t.x = 18.18;
		t.y = 30;
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 71.23;
		t.y = 35;
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 71.23;
		t.y = 35;
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_Decterous_png";
		t.width = 65;
		t.x = 184.77;
		t.y = 9.34;
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 237.82;
		t.y = 14.34;
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 237.82;
		t.y = 14.34;
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_burst_png";
		t.width = 65;
		t.x = 184.76;
		t.y = 28.34;
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 237.81;
		t.y = 33.34;
		return t;
	};
	_proto._Image71_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 237.81;
		t.y = 33.34;
		return t;
	};
	_proto.left_skill_group_i = function () {
		var t = new eui.Group();
		this.left_skill_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.45;
		t.name = "left_skill_group";
		t.visible = false;
		t.width = 78.79;
		t.x = 20;
		t.y = 517;
		t.elementsContent = [this._Image72_i(),this._Image73_i(),this._Image74_i(),this._Image75_i(),this._Image76_i(),this._Image77_i(),this._Image78_i(),this._Image79_i(),this._Image80_i(),this._Image81_i(),this._Image82_i(),this._Image83_i(),this._Image84_i(),this._Image85_i(),this._Image86_i(),this._Image87_i(),this._Image88_i()];
		return t;
	};
	_proto._Image72_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 25.73;
		t.y = 47.15;
		return t;
	};
	_proto._Image73_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 145.27;
		t.y = 47.15;
		return t;
	};
	_proto._Image74_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 269.05;
		t.y = 47.15;
		return t;
	};
	_proto._Image75_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 24.94;
		t.y = 114.15;
		return t;
	};
	_proto._Image76_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 147.14;
		t.y = 114.15;
		return t;
	};
	_proto._Image77_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 100;
		t.x = 36.16;
		t.y = 18.97;
		return t;
	};
	_proto._Image78_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_2_png";
		t.width = 50;
		t.x = 36.16;
		t.y = 18.97;
		return t;
	};
	_proto._Image79_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_Grassland_png";
		t.width = 38.89;
		t.x = 9.77;
		t.y = 10;
		return t;
	};
	_proto._Image80_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_level_a_png";
		t.width = 24.78;
		t.x = 98.68;
		t.y = 16;
		return t;
	};
	_proto._Image81_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 100;
		t.x = 153.16;
		t.y = 19.65;
		return t;
	};
	_proto._Image82_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_2_png";
		t.width = 50;
		t.x = 153.16;
		t.y = 19.65;
		return t;
	};
	_proto._Image83_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_sand_png";
		t.width = 38.89;
		t.x = 126.77;
		t.y = 10.94;
		return t;
	};
	_proto._Image84_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_level_a_png";
		t.width = 24.78;
		t.x = 215.68;
		t.y = 16.68;
		return t;
	};
	_proto._Image85_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 100;
		t.x = 272.16;
		t.y = 19.99;
		return t;
	};
	_proto._Image86_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_2_png";
		t.width = 50;
		t.x = 272.16;
		t.y = 19.99;
		return t;
	};
	_proto._Image87_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_Mud_png";
		t.width = 38.89;
		t.x = 245.77;
		t.y = 11.28;
		return t;
	};
	_proto._Image88_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_level_a_png";
		t.width = 24.78;
		t.x = 334.68;
		t.y = 17.02;
		return t;
	};
	_proto.right_skill_group_i = function () {
		var t = new eui.Group();
		this.right_skill_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.45;
		t.name = "right_skill_group";
		t.visible = false;
		t.width = 78.79;
		t.x = 743.09;
		t.y = 516.27;
		t.elementsContent = [this._Image89_i(),this._Image90_i(),this._Image91_i(),this._Image92_i(),this._Image93_i(),this._Image94_i(),this._Image95_i(),this._Image96_i(),this._Image97_i(),this._Image98_i(),this._Image99_i(),this._Image100_i(),this._Image101_i(),this._Image102_i(),this._Image103_i(),this._Image104_i(),this._Image105_i()];
		return t;
	};
	_proto._Image89_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 25.73;
		t.y = 47.15;
		return t;
	};
	_proto._Image90_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 145.27;
		t.y = 47.15;
		return t;
	};
	_proto._Image91_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 269.05;
		t.y = 47.15;
		return t;
	};
	_proto._Image92_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 24.94;
		t.y = 114.15;
		return t;
	};
	_proto._Image93_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 147.14;
		t.y = 114.15;
		return t;
	};
	_proto._Image94_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 100;
		t.x = 36.16;
		t.y = 18.97;
		return t;
	};
	_proto._Image95_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_2_png";
		t.width = 50;
		t.x = 36.16;
		t.y = 18.97;
		return t;
	};
	_proto._Image96_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_Grassland_png";
		t.width = 38.89;
		t.x = 9.77;
		t.y = 10;
		return t;
	};
	_proto._Image97_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_level_a_png";
		t.width = 24.78;
		t.x = 98.68;
		t.y = 16;
		return t;
	};
	_proto._Image98_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 100;
		t.x = 153.16;
		t.y = 19.65;
		return t;
	};
	_proto._Image99_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_2_png";
		t.width = 50;
		t.x = 153.16;
		t.y = 19.65;
		return t;
	};
	_proto._Image100_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_sand_png";
		t.width = 38.89;
		t.x = 126.77;
		t.y = 10.94;
		return t;
	};
	_proto._Image101_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_level_a_png";
		t.width = 24.78;
		t.x = 215.68;
		t.y = 16.68;
		return t;
	};
	_proto._Image102_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_1_di_png";
		t.width = 100;
		t.x = 272.16;
		t.y = 19.99;
		return t;
	};
	_proto._Image103_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "bar_exp_2_png";
		t.width = 50;
		t.x = 272.16;
		t.y = 19.99;
		return t;
	};
	_proto._Image104_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_Mud_png";
		t.width = 38.89;
		t.x = 245.77;
		t.y = 11.28;
		return t;
	};
	_proto._Image105_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.source = "icon_level_a_png";
		t.width = 24.78;
		t.x = 334.68;
		t.y = 17.02;
		return t;
	};
	_proto.left_pedigree_group_i = function () {
		var t = new eui.Group();
		this.left_pedigree_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.name = "left_pedigree_group";
		t.visible = false;
		t.width = 84;
		t.x = 20;
		t.y = 515;
		t.elementsContent = [this._Image106_i(),this._Image107_i(),this._Image108_i(),this._Image109_i(),this._Image110_i(),this._Image111_i(),this._Image112_i(),this._Image113_i(),this._Image114_i(),this._Image115_i()];
		return t;
	};
	_proto._Image106_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 12.67;
		t.y = 61;
		return t;
	};
	_proto._Image107_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 80.17;
		t.y = 61;
		return t;
	};
	_proto._Image108_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 147.86;
		t.y = 61;
		return t;
	};
	_proto._Image109_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 215.54;
		t.y = 61;
		return t;
	};
	_proto._Image110_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 283.54;
		t.y = 61;
		return t;
	};
	_proto._Image111_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "icon_gene1_png";
		t.width = 39;
		t.x = 12;
		t.y = 59.03;
		return t;
	};
	_proto._Image112_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "icon_gene2_png";
		t.width = 39;
		t.x = 79.5;
		t.y = 59.03;
		return t;
	};
	_proto._Image113_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "icon_gene3_png";
		t.width = 39;
		t.x = 147.19;
		t.y = 59.03;
		return t;
	};
	_proto._Image114_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "icon_gene4_png";
		t.width = 39;
		t.x = 214.87;
		t.y = 59.03;
		return t;
	};
	_proto._Image115_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "icon_gene5_png";
		t.width = 39;
		t.x = 282.87;
		t.y = 59.03;
		return t;
	};
	_proto.right_pedigree_group_i = function () {
		var t = new eui.Group();
		this.right_pedigree_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.name = "right_pedigree_group";
		t.visible = false;
		t.width = 84;
		t.x = 746.85;
		t.y = 517;
		t.elementsContent = [this._Image116_i(),this._Image117_i(),this._Image118_i(),this._Image119_i(),this._Image120_i(),this._Image121_i(),this._Image122_i(),this._Image123_i(),this._Image124_i(),this._Image125_i()];
		return t;
	};
	_proto._Image116_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 12.67;
		t.y = 61;
		return t;
	};
	_proto._Image117_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 80.17;
		t.y = 61;
		return t;
	};
	_proto._Image118_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 147.86;
		t.y = 61;
		return t;
	};
	_proto._Image119_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 215.54;
		t.y = 61;
		return t;
	};
	_proto._Image120_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 283.54;
		t.y = 61;
		return t;
	};
	_proto._Image121_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "icon_gene1_png";
		t.width = 39;
		t.x = 12;
		t.y = 59.03;
		return t;
	};
	_proto._Image122_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "icon_gene2_png";
		t.width = 39;
		t.x = 79.5;
		t.y = 59.03;
		return t;
	};
	_proto._Image123_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "icon_gene3_png";
		t.width = 39;
		t.x = 147.19;
		t.y = 59.03;
		return t;
	};
	_proto._Image124_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "icon_gene4_png";
		t.width = 39;
		t.x = 214.87;
		t.y = 59.03;
		return t;
	};
	_proto._Image125_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.scaleX = 1.5;
		t.scaleY = 1.5;
		t.source = "icon_gene5_png";
		t.width = 39;
		t.x = 282.87;
		t.y = 59.03;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Merge_success.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["merge_fail_icon","merge_fail_title_img","merge_lv_img","merge_success_title_img","merge_fail_confirm","merge_fail_confirm0","star1_img","star2_img","star3_img","star4_img","star5_img","horse_name_lb"];
		
		this.height = 755;
		this.width = 400;
		this.elementsContent = [this._Image1_i(),this.merge_fail_icon_i(),this.merge_fail_title_img_i(),this.merge_lv_img_i(),this.merge_success_title_img_i(),this._Image2_i(),this.merge_fail_confirm_i(),this.merge_fail_confirm0_i(),this.star1_img_i(),this.star2_img_i(),this.star3_img_i(),this.star4_img_i(),this.star5_img_i(),this.horse_name_lb_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 364;
		t.source = "pic_light_png";
		t.width = 395;
		t.x = 3.5;
		t.y = 164;
		return t;
	};
	_proto.merge_fail_icon_i = function () {
		var t = new eui.Image();
		this.merge_fail_icon = t;
		t.anchorOffsetX = 0;
		t.height = 287;
		t.name = "merge_fail_icon";
		t.source = "get_horse_png";
		t.width = 379;
		t.x = 13.5;
		t.y = 214;
		return t;
	};
	_proto.merge_fail_title_img_i = function () {
		var t = new eui.Image();
		this.merge_fail_title_img = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.name = "merge_fail_title_img";
		t.source = "pic_successful_png";
		t.width = 304;
		t.x = 52.5;
		t.y = 85;
		return t;
	};
	_proto.merge_lv_img_i = function () {
		var t = new eui.Image();
		this.merge_lv_img = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.name = "merge_lv_img";
		t.source = "icon_level_s_png";
		t.width = 61;
		t.x = 172.5;
		t.y = 199;
		return t;
	};
	_proto.merge_success_title_img_i = function () {
		var t = new eui.Image();
		this.merge_success_title_img = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.name = "merge_success_title_img";
		t.source = "pic_merge_png";
		t.width = 181;
		t.x = 108.5;
		t.y = 144;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.source = "btn_info1_png";
		t.width = 147;
		t.x = 126.5;
		t.y = 627;
		return t;
	};
	_proto.merge_fail_confirm_i = function () {
		var t = new eui.Image();
		this.merge_fail_confirm = t;
		t.height = 28;
		t.name = "merge_fail_confirm";
		t.source = "icon_confirm_png";
		t.width = 123;
		t.x = 137.5;
		t.y = 640;
		return t;
	};
	_proto.merge_fail_confirm0_i = function () {
		var t = new eui.Image();
		this.merge_fail_confirm0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "merge_fail_confirm";
		t.source = "bar_name_di2_png";
		t.width = 229.67;
		t.x = 89.66;
		t.y = 559.34;
		return t;
	};
	_proto.star1_img_i = function () {
		var t = new eui.Image();
		this.star1_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "star1_img";
		t.source = "icon_stars2_png";
		t.visible = false;
		t.width = 38;
		t.x = 97.17;
		t.y = 504.5;
		return t;
	};
	_proto.star2_img_i = function () {
		var t = new eui.Image();
		this.star2_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "star2_img";
		t.source = "icon_stars2_png";
		t.visible = false;
		t.width = 38;
		t.x = 141.67;
		t.y = 504.5;
		return t;
	};
	_proto.star3_img_i = function () {
		var t = new eui.Image();
		this.star3_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "star3_img";
		t.source = "icon_stars2_png";
		t.visible = false;
		t.width = 38;
		t.x = 183.17;
		t.y = 504.5;
		return t;
	};
	_proto.star4_img_i = function () {
		var t = new eui.Image();
		this.star4_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "star4_img";
		t.source = "icon_stars2_png";
		t.visible = false;
		t.width = 38;
		t.x = 226.17;
		t.y = 504.5;
		return t;
	};
	_proto.star5_img_i = function () {
		var t = new eui.Image();
		this.star5_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "star5_img";
		t.source = "icon_stars2_png";
		t.visible = false;
		t.width = 38;
		t.x = 268.17;
		t.y = 503.7;
		return t;
	};
	_proto.horse_name_lb_i = function () {
		var t = new eui.Label();
		this.horse_name_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.33;
		t.name = "horse_name_lb";
		t.text = "Echo Rambo";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 240.67;
		t.x = 82.5;
		t.y = 557.68;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/NewRankUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin65 = 	(function (_super) {
		__extends(LoginUI$Skin65, _super);
		function LoginUI$Skin65() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin65.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin65;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","match_rank_bg","lv_rank_bg","match_rank_lb","barrier_rank_bg","barrier_rank_lb","lv_rank_lb","scroll_group","scroll","myrank","name","desc","desc2","lb","lb2","head","myrankG","all_rank_bg","friend_rank_bg","friend_rank_lb","all_rank_lb","fighting_parent","btn_close"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_parent_i(),this.btn_close_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_parent_i = function () {
		var t = new eui.Group();
		this.fighting_parent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 738;
		t.name = "fighting_parent";
		t.width = 1077;
		t.x = 102.74;
		t.y = 6;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.fighting_platform_i(),this._Image3_i(),this.match_rank_bg_i(),this.lv_rank_bg_i(),this.match_rank_lb_i(),this.barrier_rank_bg_i(),this.barrier_rank_lb_i(),this.lv_rank_lb_i(),this.scroll_i(),this.myrankG_i(),this.all_rank_bg_i(),this.friend_rank_bg_i(),this.friend_rank_lb_i(),this.all_rank_lb_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66.67;
		t.source = "rank_title_lb_png";
		t.width = 346.67;
		t.x = 76.26;
		t.y = 45.52;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.source = "rank_png";
		t.width = 295;
		t.x = 746.99;
		t.y = 35.53;
		return t;
	};
	_proto.fighting_platform_i = function () {
		var t = new eui.Image();
		this.fighting_platform = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 579.88;
		t.name = "fighting_platform";
		t.scale9Grid = new egret.Rectangle(29,29,143,142);
		t.source = "fighting_kuang_png";
		t.width = 1023.69;
		t.x = 49.99;
		t.y = 105.54;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 507.88;
		t.scale9Grid = new egret.Rectangle(4,0,128,146);
		t.source = "normal_bg_1_png";
		t.width = 809.39;
		t.x = 219.06;
		t.y = 140.99;
		return t;
	};
	_proto.match_rank_bg_i = function () {
		var t = new eui.Image();
		this.match_rank_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68.72;
		t.name = "match_rank_bg";
		t.source = "rank_select_01_png";
		t.width = 135.63;
		t.x = 85.55;
		t.y = 220;
		return t;
	};
	_proto.lv_rank_bg_i = function () {
		var t = new eui.Image();
		this.lv_rank_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68.72;
		t.name = "lv_rank_bg";
		t.source = "rank_select_01_png";
		t.width = 134.3;
		t.x = 85.55;
		t.y = 300;
		return t;
	};
	_proto.match_rank_lb_i = function () {
		var t = new eui.Label();
		this.match_rank_lb = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 28;
		t.height = 52.67;
		t.name = "match_rank_lb";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x7b86bb;
		t.text = "匹配对战";
		t.textAlign = "center";
		t.textColor = 0xa0b3dc;
		t.verticalAlign = "middle";
		t.width = 118;
		t.x = 157.84;
		t.y = 257.77;
		return t;
	};
	_proto.barrier_rank_bg_i = function () {
		var t = new eui.Image();
		this.barrier_rank_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68.72;
		t.name = "barrier_rank_bg";
		t.source = "rank_select_02_png";
		t.width = 135.63;
		t.x = 85.55;
		t.y = 140;
		return t;
	};
	_proto.barrier_rank_lb_i = function () {
		var t = new eui.Label();
		this.barrier_rank_lb = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 28;
		t.height = 52.67;
		t.name = "barrier_rank_lb";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xCAE9FF;
		t.text = "闯关达人";
		t.textAlign = "center";
		t.textColor = 0x7479DB;
		t.verticalAlign = "middle";
		t.width = 118;
		t.x = 157.84;
		t.y = 178.11;
		return t;
	};
	_proto.lv_rank_lb_i = function () {
		var t = new eui.Label();
		this.lv_rank_lb = t;
		t.anchorOffsetX = 58;
		t.anchorOffsetY = 27;
		t.height = 52.67;
		t.name = "lv_rank_lb";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0x7b86bb;
		t.text = "等级";
		t.textAlign = "center";
		t.textColor = 0xa0b3dc;
		t.verticalAlign = "middle";
		t.width = 118;
		t.x = 155.15;
		t.y = 335.73;
		return t;
	};
	_proto.scroll_i = function () {
		var t = new eui.Scroller();
		this.scroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 435.6;
		t.name = "scroll";
		t.width = 815.15;
		t.x = 218.17;
		t.y = 138.33;
		t.viewport = this.scroll_group_i();
		return t;
	};
	_proto.scroll_group_i = function () {
		var t = new eui.Group();
		this.scroll_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 435.6;
		t.name = "scroll_group";
		t.width = 813.64;
		return t;
	};
	_proto.myrankG_i = function () {
		var t = new eui.Group();
		this.myrankG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.83;
		t.name = "myrankG";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 219.54;
		t.y = 577.19;
		t.elementsContent = [this._Image4_i(),this.myrank_i(),this.name_i(),this.desc_i(),this.desc2_i(),this.lb_i(),this.lb2_i(),this._Image5_i(),this.head_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.83;
		t.source = "rank_data_mine_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 2.84;
		return t;
	};
	_proto.myrank_i = function () {
		var t = new eui.Label();
		this.myrank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28.67;
		t.name = "myrank";
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0x566dc2;
		t.verticalAlign = "middle";
		t.width = 105.66;
		t.x = 9.29;
		t.y = 22.99;
		return t;
	};
	_proto.name_i = function () {
		var t = new eui.Label();
		this.name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.03;
		t.name = "name";
		t.text = "你大爷";
		t.textColor = 0x566dc2;
		t.width = 164;
		t.x = 248.54;
		t.y = 20.86;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.name = "desc";
		t.size = 26;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x566DC2;
		t.verticalAlign = "middle";
		t.width = 67.79;
		t.x = 553.33;
		t.y = 19.93;
		return t;
	};
	_proto.desc2_i = function () {
		var t = new eui.Label();
		this.desc2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.name = "desc2";
		t.size = 26;
		t.text = "22.22%";
		t.textAlign = "center";
		t.textColor = 0x566DC2;
		t.verticalAlign = "middle";
		t.width = 90.94;
		t.x = 697.97;
		t.y = 19.84;
		return t;
	};
	_proto.lb_i = function () {
		var t = new eui.Label();
		this.lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.name = "lb";
		t.size = 26;
		t.text = "胜场 ：";
		t.textColor = 0x7E8BC4;
		t.width = 88.79;
		t.x = 484.12;
		t.y = 23.18;
		return t;
	};
	_proto.lb2_i = function () {
		var t = new eui.Label();
		this.lb2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.name = "lb2";
		t.size = 26;
		t.text = "胜率 ：";
		t.textColor = 0x7E8BC4;
		t.width = 88.79;
		t.x = 620.12;
		t.y = 23.18;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59.67;
		t.source = "mini_head";
		t.width = 64.67;
		t.x = 174.98;
		t.y = 4.66;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.34;
		t.name = "head";
		t.source = "default_head_png";
		t.width = 54.67;
		t.x = 179.69;
		t.y = 9.02;
		return t;
	};
	_proto.all_rank_bg_i = function () {
		var t = new eui.Image();
		this.all_rank_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62.66;
		t.name = "all_rank_bg";
		t.source = "rank_title_l_png";
		t.width = 169.33;
		t.x = 75.76;
		t.y = 49.84;
		return t;
	};
	_proto.friend_rank_bg_i = function () {
		var t = new eui.Image();
		this.friend_rank_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54.44;
		t.name = "friend_rank_bg";
		t.scaleY = 1.2;
		t.source = "rank_title_r_png";
		t.visible = false;
		t.width = 170.66;
		t.x = 250.93;
		t.y = 44.21;
		return t;
	};
	_proto.friend_rank_lb_i = function () {
		var t = new eui.Label();
		this.friend_rank_lb = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 15;
		t.name = "friend_rank_lb";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xfcdec4;
		t.text = "好友榜";
		t.textColor = 0xb16f52;
		t.x = 321.16;
		t.y = 82.18;
		return t;
	};
	_proto.all_rank_lb_i = function () {
		var t = new eui.Label();
		this.all_rank_lb = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 13;
		t.height = -4.67;
		t.name = "all_rank_lb";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xe59272;
		t.text = "总排行";
		t.textColor = 0xfffbf9;
		t.x = 152.07;
		t.y = 80.5;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.66;
		t.label = "";
		t.name = "btn_close";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64.67;
		t.x = 17.26;
		t.y = 20.13;
		t.skinName = LoginUI$Skin65;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/noEndBarrStartGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["star_01","star_02","star_03","num_lb","barr_lock","group_1"];
		
		this.height = 129;
		this.width = 117;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 128;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 118;
		t.x = -1.3;
		t.y = 0.66;
		t.elementsContent = [this._Image1_i(),this.star_01_i(),this.star_02_i(),this.star_03_i(),this.num_lb_i(),this.barr_lock_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "barr_ball_png";
		t.width = 72;
		t.x = 23;
		t.y = 13;
		return t;
	};
	_proto.star_01_i = function () {
		var t = new eui.Image();
		this.star_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.name = "star_01";
		t.source = "barr_nopass_start_png";
		t.width = 29;
		t.x = 16;
		t.y = 82;
		return t;
	};
	_proto.star_02_i = function () {
		var t = new eui.Image();
		this.star_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.name = "star_02";
		t.source = "barr_nopass_start_png";
		t.width = 29;
		t.x = 45;
		t.y = 91.5;
		return t;
	};
	_proto.star_03_i = function () {
		var t = new eui.Image();
		this.star_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.name = "star_03";
		t.source = "barr_nopass_start_png";
		t.width = 29;
		t.x = 76;
		t.y = 82;
		return t;
	};
	_proto.num_lb_i = function () {
		var t = new eui.Label();
		this.num_lb = t;
		t.anchorOffsetX = 0;
		t.name = "num_lb";
		t.text = "12";
		t.textAlign = "center";
		t.textColor = 0xf4ffff;
		t.verticalAlign = "middle";
		t.width = 40;
		t.x = 38;
		t.y = 37;
		return t;
	};
	_proto.barr_lock_i = function () {
		var t = new eui.Image();
		this.barr_lock = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.name = "barr_lock";
		t.source = "barr_lock_png";
		t.width = 27;
		t.x = 45;
		t.y = 33;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/noEndBarrUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin66 = 	(function (_super) {
		__extends(LoginUI$Skin66, _super);
		function LoginUI$Skin66() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin66.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "left_page_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin66;
	})(eui.Skin);

	var LoginUI$Skin67 = 	(function (_super) {
		__extends(LoginUI$Skin67, _super);
		function LoginUI$Skin67() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin67.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "right_page_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin67;
	})(eui.Skin);

	var LoginUI$Skin68 = 	(function (_super) {
		__extends(LoginUI$Skin68, _super);
		function LoginUI$Skin68() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","question_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin68.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "question_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin68;
	})(eui.Skin);

	var LoginUI$Skin69 = 	(function (_super) {
		__extends(LoginUI$Skin69, _super);
		function LoginUI$Skin69() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin69.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin69;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","guanka_layer","btn_left","btn_right","noend_tip","lb_bg_kuang","lb_bg_total","lb_star_total","btn_close","fighting_parent"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_platform_i(),this._Image1_i(),this.guanka_layer_i(),this.btn_left_i(),this.btn_right_i(),this.noend_tip_i(),this.lb_bg_kuang_i(),this.lb_bg_total_i(),this.lb_star_total_i(),this._Image2_i(),this.btn_close_i(),this.fighting_parent_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_platform_i = function () {
		var t = new eui.Image();
		this.fighting_platform = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 599.88;
		t.name = "fighting_platform";
		t.scale9Grid = new egret.Rectangle(29,30,142,142);
		t.source = "fighting_kuang_png";
		t.width = 1081.7;
		t.x = 127.99;
		t.y = 75.31;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 103.45;
		t.source = "view_history_title_png";
		t.width = 418;
		t.x = 453.76;
		t.y = 8.29;
		return t;
	};
	_proto.guanka_layer_i = function () {
		var t = new eui.Label();
		this.guanka_layer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.name = "guanka_layer";
		t.size = 38;
		t.stroke = 3;
		t.strokeColor = 0x6371b2;
		t.text = "第1层";
		t.textAlign = "center";
		t.textColor = 0xfffef6;
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 592.01;
		t.y = 30.43;
		return t;
	};
	_proto.btn_left_i = function () {
		var t = new eui.Button();
		this.btn_left = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.label = "";
		t.name = "btn_left";
		t.width = 48;
		t.x = 51.81;
		t.y = 323.25;
		t.skinName = LoginUI$Skin66;
		return t;
	};
	_proto.btn_right_i = function () {
		var t = new eui.Button();
		this.btn_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.label = "";
		t.name = "btn_right";
		t.width = 48;
		t.x = 1239.22;
		t.y = 321;
		t.skinName = LoginUI$Skin67;
		return t;
	};
	_proto.noend_tip_i = function () {
		var t = new eui.Button();
		this.noend_tip = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 34.67;
		t.height = 67;
		t.label = "";
		t.name = "noend_tip";
		t.width = 64;
		t.x = 143.07;
		t.y = 98.25;
		t.skinName = LoginUI$Skin68;
		return t;
	};
	_proto.lb_bg_kuang_i = function () {
		var t = new eui.Image();
		this.lb_bg_kuang = t;
		t.anchorOffsetY = 0;
		t.height = 44.45;
		t.name = "lb_bg_kuang";
		t.source = "barr_background_bg_png";
		t.width = 829;
		t.x = 231.33;
		t.y = 684.7;
		return t;
	};
	_proto.lb_bg_total_i = function () {
		var t = new eui.Image();
		this.lb_bg_total = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.75;
		t.name = "lb_bg_total";
		t.source = "barr_value_bg_png";
		t.width = 819;
		t.x = 237.54;
		t.y = 690.91;
		return t;
	};
	_proto.lb_star_total_i = function () {
		var t = new eui.Label();
		this.lb_star_total = t;
		t.name = "lb_star_total";
		t.size = 26;
		t.text = "获得100/100颗星";
		t.x = 247.55;
		t.y = 694.56;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77;
		t.source = "gift_01_png";
		t.visible = false;
		t.width = 95;
		t.x = 1001.91;
		t.y = 664.32;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 41.33;
		t.anchorOffsetY = 41.33;
		t.height = 82.91;
		t.label = "";
		t.name = "btn_close";
		t.width = 79.76;
		t.x = 61.38;
		t.y = 54.85;
		t.skinName = LoginUI$Skin69;
		return t;
	};
	_proto.fighting_parent_i = function () {
		var t = new eui.Group();
		this.fighting_parent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 770;
		t.name = "fighting_parent";
		t.width = 992.67;
		t.x = 169.4;
		t.y = -12;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/NoticeUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin70 = 	(function (_super) {
		__extends(LoginUI$Skin70, _super);
		function LoginUI$Skin70() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin70.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "LoginTexture_json.AuthClose_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin70;
	})(eui.Skin);

	var LoginUI$Skin71 = 	(function (_super) {
		__extends(LoginUI$Skin71, _super);
		function LoginUI$Skin71() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin71.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "LoginTexture_json.YellowBG_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin71;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_close","title_registe","left_group","left_scroller","btn_clear","lb_clear","lb_clear_click","group_clear","lb_title","lb_mail_info"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.btn_close_i(),this.title_registe_i(),this.left_scroller_i(),this.group_clear_i(),this.lb_title_i(),this.lb_mail_info_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 750;
		t.source = "topmask_png";
		t.width = 1334;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 405;
		t.source = "LoginTexture_json.Img_toubiao_png";
		t.width = 613;
		t.x = 351.5;
		t.y = 155.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 241;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LoginTexture_json.Bg_kuang_png";
		t.width = 211.33;
		t.x = 373.67;
		t.y = 228;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.33;
		t.label = "";
		t.name = "btn_close";
		t.width = 68.33;
		t.x = 948.34;
		t.y = 121.83;
		t.skinName = LoginUI$Skin70;
		return t;
	};
	_proto.title_registe_i = function () {
		var t = new eui.Label();
		this.title_registe = t;
		t.name = "title_registe";
		t.size = 32;
		t.text = "公  告";
		t.textColor = 0xefba1c;
		t.x = 634.5;
		t.y = 176.66;
		return t;
	};
	_proto.left_scroller_i = function () {
		var t = new eui.Scroller();
		this.left_scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 233;
		t.name = "left_scroller";
		t.width = 209;
		t.x = 378;
		t.y = 230;
		t.viewport = this.left_group_i();
		return t;
	};
	_proto.left_group_i = function () {
		var t = new eui.Group();
		this.left_group = t;
		t.anchorOffsetY = 0;
		t.height = 229;
		t.name = "left_group";
		return t;
	};
	_proto.group_clear_i = function () {
		var t = new eui.Group();
		this.group_clear = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.name = "group_clear";
		t.width = 111;
		t.x = 626.5;
		t.y = 486.5;
		t.elementsContent = [this.btn_clear_i(),this.lb_clear_i(),this.lb_clear_click_i()];
		return t;
	};
	_proto.btn_clear_i = function () {
		var t = new eui.Button();
		this.btn_clear = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.label = "";
		t.name = "btn_clear";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 110;
		t.x = 0.5;
		t.y = 1.5;
		t.skinName = LoginUI$Skin71;
		return t;
	};
	_proto.lb_clear_i = function () {
		var t = new eui.Label();
		this.lb_clear = t;
		t.fontFamily = "KaiTi";
		t.name = "lb_clear";
		t.size = 25;
		t.text = "清 除";
		t.textColor = 0xb22727;
		t.x = 25.5;
		t.y = 9.5;
		return t;
	};
	_proto.lb_clear_click_i = function () {
		var t = new eui.Label();
		this.lb_clear_click = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.name = "lb_clear_click";
		t.text = "";
		t.width = 108;
		t.x = 3;
		t.y = 4.5;
		return t;
	};
	_proto.lb_title_i = function () {
		var t = new eui.Label();
		this.lb_title = t;
		t.anchorOffsetX = 0;
		t.name = "lb_title";
		t.size = 18;
		t.text = "标题：喜报！！！";
		t.textColor = 0xb5aaaa;
		t.width = 212;
		t.x = 597.5;
		t.y = 241;
		return t;
	};
	_proto.lb_mail_info_i = function () {
		var t = new eui.Label();
		this.lb_mail_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 172;
		t.name = "lb_mail_info";
		t.size = 18;
		t.text = "恭喜xxxxxxxxxxxxxxxxxxxxxxxxxxx恭喜xxxxxxxxxxxxxxxxxxxxxxxxxxx恭喜xxxxxxxxxxxxxxxxxxxxxxxxxxx恭喜xxxxxxxxxxxxxxxxxxxxxxxxxxx恭喜xxxxxxxxxxxxxxxxxxxxxxxxxxx恭喜xxxxxxxxxxxxxxxxxxxxxxxxxxx恭喜xxxxxxxxxxxxxxxxxxxxxxxxxxx";
		t.textColor = 0xb5aaaa;
		t.width = 367;
		t.x = 597.5;
		t.y = 278.5;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/PayShopUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin72 = 	(function (_super) {
		__extends(LoginUI$Skin72, _super);
		function LoginUI$Skin72() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin72.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_yellow_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin72;
	})(eui.Skin);

	var LoginUI$Skin73 = 	(function (_super) {
		__extends(LoginUI$Skin73, _super);
		function LoginUI$Skin73() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_type2_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin73.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_type1_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin73;
	})(eui.Skin);

	var LoginUI$Skin74 = 	(function (_super) {
		__extends(LoginUI$Skin74, _super);
		function LoginUI$Skin74() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin74.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_zuanshi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin74;
	})(eui.Skin);

	var LoginUI$Skin75 = 	(function (_super) {
		__extends(LoginUI$Skin75, _super);
		function LoginUI$Skin75() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin75.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_coin";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin75;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["res_group","res_scroller","btn_fashion","t_shi","t_zhuang","btn_one_lb","btn_paopao","t_pao1","t_pao2","btn_two_lb","btn_texiao","t_te","t_xiao","btn_three_lb","btn_daoju","t_dao","t_ju","btn_four_lb","shop_banner","btn_close","shop_show_info","shop_show_icon","btn_buy","img_coin_bg","img_zuan_bg","btn_noticetip","btn_shop3","coin_num_lb","zuan_num_lb"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.res_scroller_i(),this.btn_fashion_i(),this.t_shi_i(),this.t_zhuang_i(),this.btn_one_lb_i(),this.btn_paopao_i(),this.t_pao1_i(),this.t_pao2_i(),this.btn_two_lb_i(),this.btn_texiao_i(),this.t_te_i(),this.t_xiao_i(),this.btn_three_lb_i(),this.btn_daoju_i(),this.t_dao_i(),this.t_ju_i(),this.btn_four_lb_i(),this.shop_banner_i(),this.btn_close_i(),this._Image4_i(),this._Image5_i(),this.shop_show_info_i(),this._Button1_i(),this.shop_show_icon_i(),this.btn_buy_i(),this.img_coin_bg_i(),this.img_zuan_bg_i(),this.btn_noticetip_i(),this.btn_shop3_i(),this.coin_num_lb_i(),this.zuan_num_lb_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 750;
		t.source = "mask_layer_png";
		t.visible = false;
		t.width = 1334;
		t.x = -1.5;
		t.y = 1.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 651.33;
		t.source = "shop_bg_png";
		t.width = 1177.95;
		t.x = 84.23;
		t.y = 64.68;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 504.75;
		t.scale9Grid = new egret.Rectangle(16,11,216,216);
		t.source = "shop_bg_1_png";
		t.width = 853.35;
		t.x = 306.23;
		t.y = 191.85;
		return t;
	};
	_proto.res_scroller_i = function () {
		var t = new eui.Scroller();
		this.res_scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 496.85;
		t.name = "res_scroller";
		t.width = 570;
		t.x = 308.28;
		t.y = 191.82;
		t.viewport = this.res_group_i();
		return t;
	};
	_proto.res_group_i = function () {
		var t = new eui.Group();
		this.res_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 448.33;
		t.name = "res_group";
		t.width = 569;
		t.x = -1.52;
		return t;
	};
	_proto.btn_fashion_i = function () {
		var t = new eui.Image();
		this.btn_fashion = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.09;
		t.name = "btn_fashion";
		t.source = "shop_page_yes_png";
		t.width = 111.42;
		t.x = 194.17;
		t.y = 211.3;
		return t;
	};
	_proto.t_shi_i = function () {
		var t = new eui.Label();
		this.t_shi = t;
		t.bold = true;
		t.name = "t_shi";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xfcefdf;
		t.text = "全";
		t.textColor = 0xea8c31;
		t.x = 224.12;
		t.y = 234.98;
		return t;
	};
	_proto.t_zhuang_i = function () {
		var t = new eui.Label();
		this.t_zhuang = t;
		t.bold = true;
		t.name = "t_zhuang";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xfcefdf;
		t.text = "部";
		t.textColor = 0xea8c31;
		t.x = 262;
		t.y = 236.08;
		return t;
	};
	_proto.btn_one_lb_i = function () {
		var t = new eui.Label();
		this.btn_one_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.58;
		t.name = "btn_one_lb";
		t.text = "";
		t.width = 120.52;
		t.x = 183.88;
		t.y = 215.79;
		return t;
	};
	_proto.btn_paopao_i = function () {
		var t = new eui.Image();
		this.btn_paopao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.09;
		t.name = "btn_paopao";
		t.source = "shop_page_not_png";
		t.width = 111.42;
		t.x = 193.53;
		t.y = 292.5;
		return t;
	};
	_proto.t_pao1_i = function () {
		var t = new eui.Label();
		this.t_pao1 = t;
		t.bold = true;
		t.name = "t_pao1";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xe5af8e;
		t.text = "普";
		t.textColor = 0xfff1cf;
		t.x = 223.48;
		t.y = 316.18;
		return t;
	};
	_proto.t_pao2_i = function () {
		var t = new eui.Label();
		this.t_pao2 = t;
		t.bold = true;
		t.name = "t_pao2";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xe5af8e;
		t.text = "通";
		t.textColor = 0xfff1cf;
		t.x = 261.36;
		t.y = 317.28;
		return t;
	};
	_proto.btn_two_lb_i = function () {
		var t = new eui.Label();
		this.btn_two_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.58;
		t.name = "btn_two_lb";
		t.text = "";
		t.width = 120.52;
		t.x = 183.24;
		t.y = 296.99;
		return t;
	};
	_proto.btn_texiao_i = function () {
		var t = new eui.Image();
		this.btn_texiao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.09;
		t.name = "btn_texiao";
		t.source = "shop_page_not_png";
		t.width = 111.42;
		t.x = 192.89;
		t.y = 372.22;
		return t;
	};
	_proto.t_te_i = function () {
		var t = new eui.Label();
		this.t_te = t;
		t.bold = true;
		t.name = "t_te";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xe5af8e;
		t.text = "泡";
		t.textColor = 0xFFF1CF;
		t.x = 222.84;
		t.y = 395.9;
		return t;
	};
	_proto.t_xiao_i = function () {
		var t = new eui.Label();
		this.t_xiao = t;
		t.bold = true;
		t.name = "t_xiao";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xe5af8e;
		t.text = "泡";
		t.textColor = 0xFFF1CF;
		t.x = 260.72;
		t.y = 397;
		return t;
	};
	_proto.btn_three_lb_i = function () {
		var t = new eui.Label();
		this.btn_three_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.58;
		t.name = "btn_three_lb";
		t.text = "";
		t.width = 120.52;
		t.x = 182.6;
		t.y = 376.71;
		return t;
	};
	_proto.btn_daoju_i = function () {
		var t = new eui.Image();
		this.btn_daoju = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.09;
		t.name = "btn_daoju";
		t.source = "shop_page_not_png";
		t.width = 111.42;
		t.x = 193.77;
		t.y = 450.4;
		return t;
	};
	_proto.t_dao_i = function () {
		var t = new eui.Label();
		this.t_dao = t;
		t.bold = true;
		t.name = "t_dao";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xe5af8e;
		t.text = "特";
		t.textColor = 0xFFF1CF;
		t.x = 223.72;
		t.y = 474.08;
		return t;
	};
	_proto.t_ju_i = function () {
		var t = new eui.Label();
		this.t_ju = t;
		t.bold = true;
		t.name = "t_ju";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xe5af8e;
		t.text = "效";
		t.textColor = 0xFFF1CF;
		t.x = 261.6;
		t.y = 475.18;
		return t;
	};
	_proto.btn_four_lb_i = function () {
		var t = new eui.Label();
		this.btn_four_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.58;
		t.name = "btn_four_lb";
		t.text = "";
		t.width = 120.52;
		t.x = 183.48;
		t.y = 454.89;
		return t;
	};
	_proto.shop_banner_i = function () {
		var t = new eui.Image();
		this.shop_banner = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 178.5;
		t.name = "shop_banner";
		t.source = "shop_banner_png";
		t.width = 1057.02;
		t.x = 114.38;
		t.y = 26.53;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 41;
		t.anchorOffsetY = 43;
		t.height = 82.91;
		t.label = "";
		t.name = "btn_close";
		t.width = 79.76;
		t.x = 1121.68;
		t.y = 148.31;
		t.skinName = LoginUI$Skin72;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 469.07;
		t.scale9Grid = new egret.Rectangle(11,9,109,112);
		t.source = "shop_bg_2_png";
		t.width = 272.18;
		t.x = 872.94;
		t.y = 209.48;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 230.15;
		t.scale9Grid = new egret.Rectangle(5,5,139,143);
		t.source = "shop_bg_3_png";
		t.width = 234.34;
		t.x = 891.38;
		t.y = 222.46;
		return t;
	};
	_proto.shop_show_info_i = function () {
		var t = new eui.Label();
		this.shop_show_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 135.33;
		t.lineSpacing = 6;
		t.name = "shop_show_info";
		t.size = 28;
		t.text = "品描述商描述商品描述商品描述商品描述商品描述";
		t.textAlign = "left";
		t.textColor = 0x9d6357;
		t.verticalAlign = "middle";
		t.width = 256.14;
		t.x = 889.15;
		t.y = 461.52;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 64;
		t.label = "";
		t.width = 156;
		t.x = 932.95;
		t.y = 603.79;
		t.skinName = LoginUI$Skin73;
		return t;
	};
	_proto.shop_show_icon_i = function () {
		var t = new eui.Image();
		this.shop_show_icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 179.45;
		t.name = "shop_show_icon";
		t.source = "mini_weili";
		t.width = 177.45;
		t.x = 919.83;
		t.y = 249.55;
		return t;
	};
	_proto.btn_buy_i = function () {
		var t = new eui.Label();
		this.btn_buy = t;
		t.anchorOffsetX = 78;
		t.anchorOffsetY = 31;
		t.height = 64;
		t.name = "btn_buy";
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0xF47B33;
		t.text = "购   买";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 1012.16;
		t.y = 634.72;
		return t;
	};
	_proto.img_coin_bg_i = function () {
		var t = new eui.Image();
		this.img_coin_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "img_coin_bg";
		t.source = "mini_own";
		t.width = 129.33;
		t.x = 684.68;
		t.y = 16.34;
		return t;
	};
	_proto.img_zuan_bg_i = function () {
		var t = new eui.Image();
		this.img_zuan_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "img_zuan_bg";
		t.source = "mini_own";
		t.width = 124;
		t.x = 961.39;
		t.y = 16.34;
		return t;
	};
	_proto.btn_noticetip_i = function () {
		var t = new eui.Button();
		this.btn_noticetip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.label = "";
		t.name = "btn_noticetip";
		t.width = 46;
		t.x = 936.25;
		t.y = 7.44;
		t.skinName = LoginUI$Skin74;
		return t;
	};
	_proto.btn_shop3_i = function () {
		var t = new eui.Button();
		this.btn_shop3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.label = "";
		t.name = "btn_shop";
		t.width = 46;
		t.x = 651.52;
		t.y = 7.44;
		t.skinName = LoginUI$Skin75;
		return t;
	};
	_proto.coin_num_lb_i = function () {
		var t = new eui.Label();
		this.coin_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "coin_num_lb";
		t.size = 26;
		t.text = "1234567";
		t.textAlign = "right";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 104.51;
		t.x = 702.41;
		t.y = 19.01;
		return t;
	};
	_proto.zuan_num_lb_i = function () {
		var t = new eui.Label();
		this.zuan_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.name = "zuan_num_lb";
		t.size = 26;
		t.text = "1234567";
		t.textAlign = "right";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 105;
		t.x = 973.56;
		t.y = 19.2;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Pedigree_middle.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 177;
		this.width = 362;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label1_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Label2_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.source = "bar_info_Gener_di_png";
		t.width = 81;
		t.x = 55.64;
		t.y = 12.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "tx2_1_png";
		t.width = 53;
		t.x = 69.93;
		t.y = 24.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 66.64;
		t.y = 100.75;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 78.39;
		t.y = 100.75;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 90.14;
		t.y = 100.75;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 102.39;
		t.y = 100.75;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 114.18;
		t.y = 100.75;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.size = 10;
		t.text = "Ferrari xxxx";
		t.textAlign = "center";
		t.textColor = 0x070202;
		t.verticalAlign = "middle";
		t.width = 67;
		t.x = 62.89;
		t.y = 82.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_level_png";
		t.width = 30;
		t.x = 55.64;
		t.y = 12.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.source = "icon_level_s_png";
		t.width = 14;
		t.x = 63.64;
		t.y = 18.5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.source = "bar_info_Gener_di_png";
		t.width = 81;
		t.x = 229.64;
		t.y = 14;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "tx2_1_png";
		t.width = 53;
		t.x = 243.93;
		t.y = 26;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 240.64;
		t.y = 102.25;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 252.39;
		t.y = 102.25;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 264.14;
		t.y = 102.25;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 276.39;
		t.y = 102.25;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 288.18;
		t.y = 102.25;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.size = 10;
		t.text = "Ferrari xxxx";
		t.textAlign = "center";
		t.textColor = 0x070202;
		t.verticalAlign = "middle";
		t.width = 67;
		t.x = 236.89;
		t.y = 84;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_level_png";
		t.width = 30;
		t.x = 229.64;
		t.y = 14;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.source = "icon_level_s_png";
		t.width = 14;
		t.x = 237.64;
		t.y = 20;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(4,0,3,6);
		t.source = "sign_point_2_png";
		t.width = 10;
		t.x = 229.64;
		t.y = 62.5;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(5,0,12,5);
		t.source = "sign_point_1_png";
		t.width = 20;
		t.x = 171;
		t.y = 70;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Pedigree_single.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 112.67;
		this.width = 89;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label1_i(),this._Image8_i(),this._Image9_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.source = "bar_info_Gener_di_png";
		t.width = 81;
		t.x = 3.64;
		t.y = 2.31;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "tx2_1_png";
		t.width = 53;
		t.x = 17.93;
		t.y = 14.31;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 14.64;
		t.y = 90.56;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 26.39;
		t.y = 90.56;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 38.14;
		t.y = 90.56;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 50.39;
		t.y = 90.56;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 62.18;
		t.y = 90.56;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.size = 10;
		t.text = "Ferrari xxxx";
		t.textAlign = "center";
		t.textColor = 0x070202;
		t.verticalAlign = "middle";
		t.width = 67;
		t.x = 10.89;
		t.y = 72.31;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_level_png";
		t.width = 30;
		t.x = 3.64;
		t.y = 2.31;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.source = "icon_level_s_png";
		t.width = 14;
		t.x = 11.64;
		t.y = 8.31;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Pedigree_start.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = [];
		
		this.height = 177;
		this.width = 362;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Label1_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Label2_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.source = "bar_info_Gener_di_png";
		t.width = 81;
		t.x = 55.64;
		t.y = 12.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "tx2_1_png";
		t.width = 53;
		t.x = 69.93;
		t.y = 24.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 66.64;
		t.y = 100.75;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 78.39;
		t.y = 100.75;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 90.14;
		t.y = 100.75;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 102.39;
		t.y = 100.75;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 114.18;
		t.y = 100.75;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.size = 10;
		t.text = "Ferrari xxxx";
		t.textAlign = "center";
		t.textColor = 0x070202;
		t.verticalAlign = "middle";
		t.width = 67;
		t.x = 62.89;
		t.y = 82.5;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_level_png";
		t.width = 30;
		t.x = 55.64;
		t.y = 12.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.source = "icon_level_s_png";
		t.width = 14;
		t.x = 63.64;
		t.y = 18.5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.source = "bar_info_Gener_di_png";
		t.width = 81;
		t.x = 229.64;
		t.y = 14;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "tx2_1_png";
		t.width = 53;
		t.x = 243.93;
		t.y = 26;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 240.64;
		t.y = 102.25;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 252.39;
		t.y = 102.25;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 264.14;
		t.y = 102.25;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 276.39;
		t.y = 102.25;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 288.18;
		t.y = 102.25;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.size = 10;
		t.text = "Ferrari xxxx";
		t.textAlign = "center";
		t.textColor = 0x070202;
		t.verticalAlign = "middle";
		t.width = 67;
		t.x = 236.89;
		t.y = 84;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_level_png";
		t.width = 30;
		t.x = 229.64;
		t.y = 14;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.source = "icon_level_s_png";
		t.width = 14;
		t.x = 237.64;
		t.y = 20;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(4,0,3,6);
		t.source = "sign_point_2_png";
		t.width = 10;
		t.x = 229.64;
		t.y = 62.5;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(4,0,3,6);
		t.source = "sign_point_2_png";
		t.width = 10;
		t.x = 183;
		t.y = 135;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 70;
		t.scale9Grid = new egret.Rectangle(4,0,3,6);
		t.source = "sign_point_2_png";
		t.width = 10;
		t.x = 177;
		t.y = 69;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 20;
		t.source = "sign_point_1_png";
		t.width = 20;
		t.x = 81.14;
		t.y = 140;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/PlayToEarn_select_01.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin76 = 	(function (_super) {
		__extends(LoginUI$Skin76, _super);
		function LoginUI$Skin76() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin76.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin76;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["img_head_bg0","horse_lv_img0","select_2_img0","start_6","start_0","start_1","start_2","start_3","start_4","group_1","img_head_bg1","horse_lv_img1","select_2_img1","start_5","start_7","start_8","start_9","start_10","start_11","group_0","img_head_bg2","horse_lv_img2","select_2_img2","start_12","start_13","start_14","start_15","start_16","start_17","group_2","img_head_bg3","horse_lv_img3","select_2_img3","start_18","start_19","start_20","start_21","start_22","start_23","group_3","img_head_bg4","horse_lv_img4","select_2_img4","start_24","start_25","start_26","start_27","start_28","start_29","group_4","img_head_bg5","horse_lv_img5","select_2_img5","start_30","start_31","start_32","start_33","start_34","start_35","group_5","img_head_bg6","horse_lv_img6","select_2_img6","start_36","start_37","start_38","start_39","start_40","start_41","group_6","img_head_bg7","horse_lv_img7","select_2_img7","start_42","start_43","start_44","start_45","start_46","start_47","group_7","img_head_bg8","horse_lv_img8","select_2_img8","start_48","start_49","start_50","start_51","start_52","start_53","group_8","res_group0","res_scroller0","horse_panel_group","img_head_bg9","horse_lv_img9","select_2_img9","start_54","start_55","start_56","start_57","start_58","start_59","group_9","img_head_bg10","horse_lv_img10","select_2_img10","start_60","start_61","start_62","start_63","start_64","start_65","group_10","img_head_bg11","horse_lv_img11","select_2_img11","start_66","start_67","start_68","start_69","start_70","start_71","group_11","img_head_bg12","horse_lv_img12","select_2_img12","start_72","start_73","start_74","start_75","start_76","start_77","group_12","img_head_bg13","horse_lv_img13","select_2_img13","start_78","start_79","start_80","start_81","start_82","start_83","group_13","img_head_bg14","horse_lv_img14","select_2_img14","start_84","start_85","start_86","start_87","start_88","start_89","group_14","img_head_bg15","horse_lv_img15","select_2_img15","start_90","start_91","start_92","start_93","start_94","start_95","group_15","img_head_bg16","horse_lv_img16","select_2_img16","start_96","start_97","start_98","start_99","start_100","start_101","group_16","img_head_bg17","horse_lv_img17","select_2_img17","start_102","start_103","start_104","start_105","start_106","start_107","group_17","res_group1","res_scroller1","horse_panel_group0","clain_rewards_btn","btn_shop0"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.horse_panel_group_i(),this.horse_panel_group0_i(),this._Image61_i(),this._Label59_i(),this._Label60_i(),this._Label61_i(),this._Label62_i(),this._Label63_i(),this._Label64_i(),this._Image62_i(),this._Image63_i(),this._Image64_i(),this._Image65_i(),this._Image66_i(),this._Image67_i(),this._Image68_i(),this._Image69_i(),this._Image70_i(),this._Image71_i(),this.clain_rewards_btn_i(),this._Image72_i(),this._Image73_i(),this._Image74_i(),this._Image75_i(),this.btn_shop0_i(),this._Label65_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 612;
		t.source = "select4_s_png";
		t.visible = false;
		t.width = 416;
		t.x = 465.5;
		t.y = 31;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 612;
		t.source = "select4_s_png";
		t.visible = false;
		t.width = 416;
		t.x = 903;
		t.y = 31;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.source = "title_di_png";
		t.width = 292;
		t.x = 9;
		t.y = 12;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.source = "Ranch-Exhibition_png";
		t.width = 232;
		t.x = 21;
		t.y = 28;
		return t;
	};
	_proto.horse_panel_group_i = function () {
		var t = new eui.Group();
		this.horse_panel_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44.91;
		t.name = "horse_panel_group";
		t.width = 209;
		t.x = 64.19;
		t.y = 19.55;
		t.elementsContent = [this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Label1_i(),this._Label2_i(),this._Image13_i(),this._Image14_i(),this.res_scroller0_i()];
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 582;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_info_di_18_png";
		t.width = 394;
		t.x = 17.67;
		t.y = 62.67;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 2;
		t.source = "bar_Splitline_1_png";
		t.width = 346;
		t.x = 41;
		t.y = 134;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "My-Stables_png";
		t.width = 394;
		t.x = 16;
		t.y = 91;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15;
		t.source = "Selected：_png";
		t.width = 122;
		t.x = 34;
		t.y = 149;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15;
		t.source = "select-all：_png";
		t.width = 122;
		t.x = 261;
		t.y = 163;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.source = "select6_di_png";
		t.width = 23;
		t.x = 344;
		t.y = 158;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.source = "select6_s_png";
		t.width = 23;
		t.x = 344;
		t.y = 158;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15;
		t.source = "Selected-Score：_png";
		t.width = 122;
		t.x = 34;
		t.y = 171;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "15/20";
		t.x = 180;
		t.y = 146;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "123456";
		t.x = 181;
		t.y = 169;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 58;
		t.source = "btn_info1_png";
		t.width = 180;
		t.x = 121.62;
		t.y = 567.23;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "Join-Exhibition_png";
		t.width = 170;
		t.x = 127.02;
		t.y = 583.35;
		return t;
	};
	_proto.res_scroller0_i = function () {
		var t = new eui.Scroller();
		this.res_scroller0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 351;
		t.name = "res_scroller";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 394;
		t.x = 17;
		t.y = 195;
		t.viewport = this.res_group0_i();
		return t;
	};
	_proto.res_group0_i = function () {
		var t = new eui.Group();
		this.res_group0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 351;
		t.name = "res_group";
		t.width = 394;
		t.x = -1.52;
		t.y = -253.03;
		t.elementsContent = [this.group_1_i(),this.group_0_i(),this.group_2_i(),this.group_3_i(),this.group_4_i(),this.group_5_i(),this.group_6_i(),this.group_7_i(),this.group_8_i()];
		return t;
	};
	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 77.93;
		t.y = 66.98;
		t.elementsContent = [this._Image15_i(),this._Image16_i(),this.img_head_bg0_i(),this.horse_lv_img0_i(),this.select_2_img0_i(),this.start_6_i(),this.start_0_i(),this.start_1_i(),this.start_2_i(),this.start_3_i(),this.start_4_i(),this._Label3_i(),this._Label4_i(),this._Label5_i()];
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg0_i = function () {
		var t = new eui.Image();
		this.img_head_bg0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img0_i = function () {
		var t = new eui.Image();
		this.horse_lv_img0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img0_i = function () {
		var t = new eui.Image();
		this.select_2_img0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_6_i = function () {
		var t = new eui.Image();
		this.start_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_0_i = function () {
		var t = new eui.Image();
		this.start_0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_1_i = function () {
		var t = new eui.Image();
		this.start_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_2_i = function () {
		var t = new eui.Image();
		this.start_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_3_i = function () {
		var t = new eui.Image();
		this.start_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_4_i = function () {
		var t = new eui.Image();
		this.start_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_0_i = function () {
		var t = new eui.Group();
		this.group_0 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 199;
		t.y = 66.98;
		t.elementsContent = [this._Image17_i(),this._Image18_i(),this.img_head_bg1_i(),this.horse_lv_img1_i(),this.select_2_img1_i(),this.start_5_i(),this.start_7_i(),this.start_8_i(),this.start_9_i(),this.start_10_i(),this.start_11_i(),this._Label6_i(),this._Label7_i(),this._Label8_i()];
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg1_i = function () {
		var t = new eui.Image();
		this.img_head_bg1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img1_i = function () {
		var t = new eui.Image();
		this.horse_lv_img1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img1_i = function () {
		var t = new eui.Image();
		this.select_2_img1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_5_i = function () {
		var t = new eui.Image();
		this.start_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_7_i = function () {
		var t = new eui.Image();
		this.start_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_8_i = function () {
		var t = new eui.Image();
		this.start_8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_9_i = function () {
		var t = new eui.Image();
		this.start_9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_10_i = function () {
		var t = new eui.Image();
		this.start_10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_11_i = function () {
		var t = new eui.Image();
		this.start_11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_2_i = function () {
		var t = new eui.Group();
		this.group_2 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 319.31;
		t.y = 66.98;
		t.elementsContent = [this._Image19_i(),this._Image20_i(),this.img_head_bg2_i(),this.horse_lv_img2_i(),this.select_2_img2_i(),this.start_12_i(),this.start_13_i(),this.start_14_i(),this.start_15_i(),this.start_16_i(),this.start_17_i(),this._Label9_i(),this._Label10_i(),this._Label11_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg2_i = function () {
		var t = new eui.Image();
		this.img_head_bg2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img2_i = function () {
		var t = new eui.Image();
		this.horse_lv_img2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img2_i = function () {
		var t = new eui.Image();
		this.select_2_img2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -10.83;
		return t;
	};
	_proto.start_12_i = function () {
		var t = new eui.Image();
		this.start_12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_13_i = function () {
		var t = new eui.Image();
		this.start_13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_14_i = function () {
		var t = new eui.Image();
		this.start_14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_15_i = function () {
		var t = new eui.Image();
		this.start_15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_16_i = function () {
		var t = new eui.Image();
		this.start_16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_17_i = function () {
		var t = new eui.Image();
		this.start_17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_3_i = function () {
		var t = new eui.Group();
		this.group_3 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 78.93;
		t.y = 218.5;
		t.elementsContent = [this._Image21_i(),this._Image22_i(),this.img_head_bg3_i(),this.horse_lv_img3_i(),this.select_2_img3_i(),this.start_18_i(),this.start_19_i(),this.start_20_i(),this.start_21_i(),this.start_22_i(),this.start_23_i(),this._Label12_i(),this._Label13_i(),this._Label14_i()];
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg3_i = function () {
		var t = new eui.Image();
		this.img_head_bg3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img3_i = function () {
		var t = new eui.Image();
		this.horse_lv_img3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img3_i = function () {
		var t = new eui.Image();
		this.select_2_img3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_18_i = function () {
		var t = new eui.Image();
		this.start_18 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_19_i = function () {
		var t = new eui.Image();
		this.start_19 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_20_i = function () {
		var t = new eui.Image();
		this.start_20 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_21_i = function () {
		var t = new eui.Image();
		this.start_21 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_22_i = function () {
		var t = new eui.Image();
		this.start_22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_23_i = function () {
		var t = new eui.Image();
		this.start_23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_4_i = function () {
		var t = new eui.Group();
		this.group_4 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 200;
		t.y = 218.5;
		t.elementsContent = [this._Image23_i(),this._Image24_i(),this.img_head_bg4_i(),this.horse_lv_img4_i(),this.select_2_img4_i(),this.start_24_i(),this.start_25_i(),this.start_26_i(),this.start_27_i(),this.start_28_i(),this.start_29_i(),this._Label15_i(),this._Label16_i(),this._Label17_i()];
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg4_i = function () {
		var t = new eui.Image();
		this.img_head_bg4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img4_i = function () {
		var t = new eui.Image();
		this.horse_lv_img4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img4_i = function () {
		var t = new eui.Image();
		this.select_2_img4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_24_i = function () {
		var t = new eui.Image();
		this.start_24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_25_i = function () {
		var t = new eui.Image();
		this.start_25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_26_i = function () {
		var t = new eui.Image();
		this.start_26 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_27_i = function () {
		var t = new eui.Image();
		this.start_27 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_28_i = function () {
		var t = new eui.Image();
		this.start_28 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_29_i = function () {
		var t = new eui.Image();
		this.start_29 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_5_i = function () {
		var t = new eui.Group();
		this.group_5 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 320.31;
		t.y = 218.5;
		t.elementsContent = [this._Image25_i(),this._Image26_i(),this.img_head_bg5_i(),this.horse_lv_img5_i(),this.select_2_img5_i(),this.start_30_i(),this.start_31_i(),this.start_32_i(),this.start_33_i(),this.start_34_i(),this.start_35_i(),this._Label18_i(),this._Label19_i(),this._Label20_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg5_i = function () {
		var t = new eui.Image();
		this.img_head_bg5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img5_i = function () {
		var t = new eui.Image();
		this.horse_lv_img5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img5_i = function () {
		var t = new eui.Image();
		this.select_2_img5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -10.83;
		return t;
	};
	_proto.start_30_i = function () {
		var t = new eui.Image();
		this.start_30 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_31_i = function () {
		var t = new eui.Image();
		this.start_31 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_32_i = function () {
		var t = new eui.Image();
		this.start_32 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_33_i = function () {
		var t = new eui.Image();
		this.start_33 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_34_i = function () {
		var t = new eui.Image();
		this.start_34 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_35_i = function () {
		var t = new eui.Image();
		this.start_35 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_6_i = function () {
		var t = new eui.Group();
		this.group_6 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 79.93;
		t.y = 369.5;
		t.elementsContent = [this._Image27_i(),this._Image28_i(),this.img_head_bg6_i(),this.horse_lv_img6_i(),this.select_2_img6_i(),this.start_36_i(),this.start_37_i(),this.start_38_i(),this.start_39_i(),this.start_40_i(),this.start_41_i(),this._Label21_i(),this._Label22_i(),this._Label23_i()];
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg6_i = function () {
		var t = new eui.Image();
		this.img_head_bg6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img6_i = function () {
		var t = new eui.Image();
		this.horse_lv_img6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img6_i = function () {
		var t = new eui.Image();
		this.select_2_img6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_36_i = function () {
		var t = new eui.Image();
		this.start_36 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_37_i = function () {
		var t = new eui.Image();
		this.start_37 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_38_i = function () {
		var t = new eui.Image();
		this.start_38 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_39_i = function () {
		var t = new eui.Image();
		this.start_39 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_40_i = function () {
		var t = new eui.Image();
		this.start_40 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_41_i = function () {
		var t = new eui.Image();
		this.start_41 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_7_i = function () {
		var t = new eui.Group();
		this.group_7 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 201;
		t.y = 369.5;
		t.elementsContent = [this._Image29_i(),this._Image30_i(),this.img_head_bg7_i(),this.horse_lv_img7_i(),this.select_2_img7_i(),this.start_42_i(),this.start_43_i(),this.start_44_i(),this.start_45_i(),this.start_46_i(),this.start_47_i(),this._Label24_i(),this._Label25_i(),this._Label26_i()];
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg7_i = function () {
		var t = new eui.Image();
		this.img_head_bg7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img7_i = function () {
		var t = new eui.Image();
		this.horse_lv_img7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img7_i = function () {
		var t = new eui.Image();
		this.select_2_img7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_42_i = function () {
		var t = new eui.Image();
		this.start_42 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_43_i = function () {
		var t = new eui.Image();
		this.start_43 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_44_i = function () {
		var t = new eui.Image();
		this.start_44 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_45_i = function () {
		var t = new eui.Image();
		this.start_45 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_46_i = function () {
		var t = new eui.Image();
		this.start_46 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_47_i = function () {
		var t = new eui.Image();
		this.start_47 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label25_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label26_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_8_i = function () {
		var t = new eui.Group();
		this.group_8 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 321.31;
		t.y = 369.5;
		t.elementsContent = [this._Image31_i(),this._Image32_i(),this.img_head_bg8_i(),this.horse_lv_img8_i(),this.select_2_img8_i(),this.start_48_i(),this.start_49_i(),this.start_50_i(),this.start_51_i(),this.start_52_i(),this.start_53_i(),this._Label27_i(),this._Label28_i(),this._Label29_i()];
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg8_i = function () {
		var t = new eui.Image();
		this.img_head_bg8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img8_i = function () {
		var t = new eui.Image();
		this.horse_lv_img8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img8_i = function () {
		var t = new eui.Image();
		this.select_2_img8 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -10.83;
		return t;
	};
	_proto.start_48_i = function () {
		var t = new eui.Image();
		this.start_48 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_49_i = function () {
		var t = new eui.Image();
		this.start_49 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_50_i = function () {
		var t = new eui.Image();
		this.start_50 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_51_i = function () {
		var t = new eui.Image();
		this.start_51 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_52_i = function () {
		var t = new eui.Image();
		this.start_52 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_53_i = function () {
		var t = new eui.Image();
		this.start_53 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label27_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label28_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label29_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.horse_panel_group0_i = function () {
		var t = new eui.Group();
		this.horse_panel_group0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44.91;
		t.name = "horse_panel_group";
		t.width = 209;
		t.x = 471.02;
		t.y = 19.55;
		t.elementsContent = [this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Label30_i(),this._Label31_i(),this._Image41_i(),this._Image42_i(),this.res_scroller1_i()];
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.height = 582;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_info_di_18_png";
		t.width = 394;
		t.x = 17.67;
		t.y = 62.67;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 2;
		t.source = "bar_Splitline_1_png";
		t.width = 346;
		t.x = 41;
		t.y = 134;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.source = "Exhibition_png";
		t.width = 394;
		t.x = 24;
		t.y = 91;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15;
		t.source = "Selected：_png";
		t.width = 122;
		t.x = 34;
		t.y = 149;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15;
		t.source = "select-all：_png";
		t.width = 122;
		t.x = 261;
		t.y = 163;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.source = "select6_di_png";
		t.width = 23;
		t.x = 344;
		t.y = 158;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.source = "select6_s_png";
		t.width = 23;
		t.x = 344;
		t.y = 158;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15;
		t.source = "Selected-Score：_png";
		t.width = 122;
		t.x = 34;
		t.y = 171;
		return t;
	};
	_proto._Label30_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "15/20";
		t.x = 180;
		t.y = 146;
		return t;
	};
	_proto._Label31_i = function () {
		var t = new eui.Label();
		t.size = 18;
		t.text = "123456";
		t.x = 181;
		t.y = 169;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 58;
		t.source = "btn_info1_png";
		t.width = 180;
		t.x = 121.62;
		t.y = 567.23;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "Go-Rest_png";
		t.width = 170;
		t.x = 127.02;
		t.y = 583.35;
		return t;
	};
	_proto.res_scroller1_i = function () {
		var t = new eui.Scroller();
		this.res_scroller1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 351;
		t.name = "res_scroller";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 394;
		t.x = 17;
		t.y = 195;
		t.viewport = this.res_group1_i();
		return t;
	};
	_proto.res_group1_i = function () {
		var t = new eui.Group();
		this.res_group1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 351;
		t.name = "res_group";
		t.width = 394;
		t.x = -1.52;
		t.y = -253.03;
		t.elementsContent = [this.group_9_i(),this.group_10_i(),this.group_11_i(),this.group_12_i(),this.group_13_i(),this.group_14_i(),this.group_15_i(),this.group_16_i(),this.group_17_i()];
		return t;
	};
	_proto.group_9_i = function () {
		var t = new eui.Group();
		this.group_9 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 77.93;
		t.y = 66.98;
		t.elementsContent = [this._Image43_i(),this._Image44_i(),this.img_head_bg9_i(),this.horse_lv_img9_i(),this.select_2_img9_i(),this.start_54_i(),this.start_55_i(),this.start_56_i(),this.start_57_i(),this.start_58_i(),this.start_59_i(),this._Label32_i(),this._Label33_i(),this._Label34_i()];
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg9_i = function () {
		var t = new eui.Image();
		this.img_head_bg9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img9_i = function () {
		var t = new eui.Image();
		this.horse_lv_img9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img9_i = function () {
		var t = new eui.Image();
		this.select_2_img9 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_54_i = function () {
		var t = new eui.Image();
		this.start_54 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_55_i = function () {
		var t = new eui.Image();
		this.start_55 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_56_i = function () {
		var t = new eui.Image();
		this.start_56 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_57_i = function () {
		var t = new eui.Image();
		this.start_57 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_58_i = function () {
		var t = new eui.Image();
		this.start_58 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_59_i = function () {
		var t = new eui.Image();
		this.start_59 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label32_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label33_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label34_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_10_i = function () {
		var t = new eui.Group();
		this.group_10 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 199;
		t.y = 66.98;
		t.elementsContent = [this._Image45_i(),this._Image46_i(),this.img_head_bg10_i(),this.horse_lv_img10_i(),this.select_2_img10_i(),this.start_60_i(),this.start_61_i(),this.start_62_i(),this.start_63_i(),this.start_64_i(),this.start_65_i(),this._Label35_i(),this._Label36_i(),this._Label37_i()];
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg10_i = function () {
		var t = new eui.Image();
		this.img_head_bg10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img10_i = function () {
		var t = new eui.Image();
		this.horse_lv_img10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img10_i = function () {
		var t = new eui.Image();
		this.select_2_img10 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_60_i = function () {
		var t = new eui.Image();
		this.start_60 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_61_i = function () {
		var t = new eui.Image();
		this.start_61 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_62_i = function () {
		var t = new eui.Image();
		this.start_62 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_63_i = function () {
		var t = new eui.Image();
		this.start_63 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_64_i = function () {
		var t = new eui.Image();
		this.start_64 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_65_i = function () {
		var t = new eui.Image();
		this.start_65 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label35_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label36_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label37_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_11_i = function () {
		var t = new eui.Group();
		this.group_11 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 319.31;
		t.y = 66.98;
		t.elementsContent = [this._Image47_i(),this._Image48_i(),this.img_head_bg11_i(),this.horse_lv_img11_i(),this.select_2_img11_i(),this.start_66_i(),this.start_67_i(),this.start_68_i(),this.start_69_i(),this.start_70_i(),this.start_71_i(),this._Label38_i(),this._Label39_i(),this._Label40_i()];
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg11_i = function () {
		var t = new eui.Image();
		this.img_head_bg11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img11_i = function () {
		var t = new eui.Image();
		this.horse_lv_img11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img11_i = function () {
		var t = new eui.Image();
		this.select_2_img11 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -10.83;
		return t;
	};
	_proto.start_66_i = function () {
		var t = new eui.Image();
		this.start_66 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_67_i = function () {
		var t = new eui.Image();
		this.start_67 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_68_i = function () {
		var t = new eui.Image();
		this.start_68 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_69_i = function () {
		var t = new eui.Image();
		this.start_69 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_70_i = function () {
		var t = new eui.Image();
		this.start_70 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_71_i = function () {
		var t = new eui.Image();
		this.start_71 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label38_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label39_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label40_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_12_i = function () {
		var t = new eui.Group();
		this.group_12 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 78.93;
		t.y = 218.5;
		t.elementsContent = [this._Image49_i(),this._Image50_i(),this.img_head_bg12_i(),this.horse_lv_img12_i(),this.select_2_img12_i(),this.start_72_i(),this.start_73_i(),this.start_74_i(),this.start_75_i(),this.start_76_i(),this.start_77_i(),this._Label41_i(),this._Label42_i(),this._Label43_i()];
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg12_i = function () {
		var t = new eui.Image();
		this.img_head_bg12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img12_i = function () {
		var t = new eui.Image();
		this.horse_lv_img12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img12_i = function () {
		var t = new eui.Image();
		this.select_2_img12 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_72_i = function () {
		var t = new eui.Image();
		this.start_72 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_73_i = function () {
		var t = new eui.Image();
		this.start_73 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_74_i = function () {
		var t = new eui.Image();
		this.start_74 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_75_i = function () {
		var t = new eui.Image();
		this.start_75 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_76_i = function () {
		var t = new eui.Image();
		this.start_76 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_77_i = function () {
		var t = new eui.Image();
		this.start_77 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label41_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label42_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label43_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_13_i = function () {
		var t = new eui.Group();
		this.group_13 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 200;
		t.y = 218.5;
		t.elementsContent = [this._Image51_i(),this._Image52_i(),this.img_head_bg13_i(),this.horse_lv_img13_i(),this.select_2_img13_i(),this.start_78_i(),this.start_79_i(),this.start_80_i(),this.start_81_i(),this.start_82_i(),this.start_83_i(),this._Label44_i(),this._Label45_i(),this._Label46_i()];
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg13_i = function () {
		var t = new eui.Image();
		this.img_head_bg13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img13_i = function () {
		var t = new eui.Image();
		this.horse_lv_img13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img13_i = function () {
		var t = new eui.Image();
		this.select_2_img13 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_78_i = function () {
		var t = new eui.Image();
		this.start_78 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_79_i = function () {
		var t = new eui.Image();
		this.start_79 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_80_i = function () {
		var t = new eui.Image();
		this.start_80 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_81_i = function () {
		var t = new eui.Image();
		this.start_81 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_82_i = function () {
		var t = new eui.Image();
		this.start_82 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_83_i = function () {
		var t = new eui.Image();
		this.start_83 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label44_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label45_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label46_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_14_i = function () {
		var t = new eui.Group();
		this.group_14 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 320.31;
		t.y = 218.5;
		t.elementsContent = [this._Image53_i(),this._Image54_i(),this.img_head_bg14_i(),this.horse_lv_img14_i(),this.select_2_img14_i(),this.start_84_i(),this.start_85_i(),this.start_86_i(),this.start_87_i(),this.start_88_i(),this.start_89_i(),this._Label47_i(),this._Label48_i(),this._Label49_i()];
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg14_i = function () {
		var t = new eui.Image();
		this.img_head_bg14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img14_i = function () {
		var t = new eui.Image();
		this.horse_lv_img14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img14_i = function () {
		var t = new eui.Image();
		this.select_2_img14 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -10.83;
		return t;
	};
	_proto.start_84_i = function () {
		var t = new eui.Image();
		this.start_84 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_85_i = function () {
		var t = new eui.Image();
		this.start_85 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_86_i = function () {
		var t = new eui.Image();
		this.start_86 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_87_i = function () {
		var t = new eui.Image();
		this.start_87 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_88_i = function () {
		var t = new eui.Image();
		this.start_88 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_89_i = function () {
		var t = new eui.Image();
		this.start_89 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label47_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label48_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label49_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_15_i = function () {
		var t = new eui.Group();
		this.group_15 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 79.93;
		t.y = 369.5;
		t.elementsContent = [this._Image55_i(),this._Image56_i(),this.img_head_bg15_i(),this.horse_lv_img15_i(),this.select_2_img15_i(),this.start_90_i(),this.start_91_i(),this.start_92_i(),this.start_93_i(),this.start_94_i(),this.start_95_i(),this._Label50_i(),this._Label51_i(),this._Label52_i()];
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg15_i = function () {
		var t = new eui.Image();
		this.img_head_bg15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img15_i = function () {
		var t = new eui.Image();
		this.horse_lv_img15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img15_i = function () {
		var t = new eui.Image();
		this.select_2_img15 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_90_i = function () {
		var t = new eui.Image();
		this.start_90 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_91_i = function () {
		var t = new eui.Image();
		this.start_91 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_92_i = function () {
		var t = new eui.Image();
		this.start_92 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_93_i = function () {
		var t = new eui.Image();
		this.start_93 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_94_i = function () {
		var t = new eui.Image();
		this.start_94 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_95_i = function () {
		var t = new eui.Image();
		this.start_95 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label50_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label51_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label52_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_16_i = function () {
		var t = new eui.Group();
		this.group_16 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 201;
		t.y = 369.5;
		t.elementsContent = [this._Image57_i(),this._Image58_i(),this.img_head_bg16_i(),this.horse_lv_img16_i(),this.select_2_img16_i(),this.start_96_i(),this.start_97_i(),this.start_98_i(),this.start_99_i(),this.start_100_i(),this.start_101_i(),this._Label53_i(),this._Label54_i(),this._Label55_i()];
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg16_i = function () {
		var t = new eui.Image();
		this.img_head_bg16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img16_i = function () {
		var t = new eui.Image();
		this.horse_lv_img16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img16_i = function () {
		var t = new eui.Image();
		this.select_2_img16 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -11;
		return t;
	};
	_proto.start_96_i = function () {
		var t = new eui.Image();
		this.start_96 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_97_i = function () {
		var t = new eui.Image();
		this.start_97 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_98_i = function () {
		var t = new eui.Image();
		this.start_98 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_99_i = function () {
		var t = new eui.Image();
		this.start_99 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_100_i = function () {
		var t = new eui.Image();
		this.start_100 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_101_i = function () {
		var t = new eui.Image();
		this.start_101 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label53_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label54_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label55_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto.group_17_i = function () {
		var t = new eui.Group();
		this.group_17 = t;
		t.anchorOffsetX = 45;
		t.anchorOffsetY = 45;
		t.height = 91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.touchChildren = false;
		t.touchThrough = false;
		t.width = 91;
		t.x = 321.31;
		t.y = 369.5;
		t.elementsContent = [this._Image59_i(),this._Image60_i(),this.img_head_bg17_i(),this.horse_lv_img17_i(),this.select_2_img17_i(),this.start_102_i(),this.start_103_i(),this.start_104_i(),this.start_105_i(),this.start_106_i(),this.start_107_i(),this._Label56_i(),this._Label57_i(),this._Label58_i()];
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.source = "bar_info_di_20_png";
		t.width = 109;
		t.x = -11.1;
		t.y = -11.2;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "stand_horse_png";
		t.width = 54.8;
		t.x = 16.1;
		t.y = 35;
		return t;
	};
	_proto.img_head_bg17_i = function () {
		var t = new eui.Image();
		this.img_head_bg17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34.75;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 25.4;
		t.x = -4.55;
		t.y = -7.81;
		return t;
	};
	_proto.horse_lv_img17_i = function () {
		var t = new eui.Image();
		this.horse_lv_img17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13.95;
		t.name = "horse_lv_img";
		t.rotation = 4.76;
		t.source = "icon_level_d_png";
		t.width = 11.96;
		t.x = 2.72;
		t.y = -1.66;
		return t;
	};
	_proto.select_2_img17_i = function () {
		var t = new eui.Image();
		this.select_2_img17 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 132.75;
		t.name = "select_2_img";
		t.scale9Grid = new egret.Rectangle(4,4,99,128);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "select5_s_png";
		t.width = 102.5;
		t.x = -7.75;
		t.y = -10.83;
		return t;
	};
	_proto.start_102_i = function () {
		var t = new eui.Image();
		this.start_102 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_1";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 25.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_103_i = function () {
		var t = new eui.Image();
		this.start_103 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_2";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 38.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_104_i = function () {
		var t = new eui.Image();
		this.start_104 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_3";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 51.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_105_i = function () {
		var t = new eui.Image();
		this.start_105 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_4";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 64.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_106_i = function () {
		var t = new eui.Image();
		this.start_106 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.5;
		t.name = "start_5";
		t.source = "icon_stars_png";
		t.width = 13;
		t.x = 77.5;
		t.y = 19.63;
		return t;
	};
	_proto.start_107_i = function () {
		var t = new eui.Image();
		this.start_107 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9.25;
		t.name = "start_5";
		t.source = "icon_Male_png";
		t.width = 7.5;
		t.x = 79.5;
		t.y = 8.36;
		return t;
	};
	_proto._Label56_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 8;
		t.text = "Echo RAMBO";
		t.textAlign = "left";
		t.textColor = 0x5E4343;
		t.verticalAlign = "bottom";
		t.width = 52.25;
		t.x = 25.25;
		t.y = 6.29;
		return t;
	};
	_proto._Label57_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 10;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 73.05;
		t.x = 8.88;
		t.y = 100.93;
		return t;
	};
	_proto._Label58_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12.25;
		t.size = 6;
		t.text = "Exhibition Score";
		t.textAlign = "left";
		t.textColor = 0xF48E18;
		t.verticalAlign = "bottom";
		t.width = 73.05;
		t.x = 23.25;
		t.y = 86.48;
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 629;
		t.source = "bar_info_di1_png";
		t.width = 424;
		t.x = 899.02;
		t.y = 75.86;
		return t;
	};
	_proto._Label59_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 16;
		t.text = "123432112323";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 127.05;
		t.x = 1113.02;
		t.y = 185.3;
		return t;
	};
	_proto._Label60_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 16;
		t.text = "123123";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 127.05;
		t.x = 1119.02;
		t.y = 581.6;
		return t;
	};
	_proto._Label61_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 16;
		t.text = "123123";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 127.05;
		t.x = 949.83;
		t.y = 312.28;
		return t;
	};
	_proto._Label62_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 16;
		t.text = "123123";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 127.05;
		t.x = 949.15;
		t.y = 526.28;
		return t;
	};
	_proto._Label63_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 16;
		t.text = "123123";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 127.05;
		t.x = 1142.5;
		t.y = 524.94;
		return t;
	};
	_proto._Label64_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.25;
		t.size = 16;
		t.text = "123123";
		t.textAlign = "center";
		t.textColor = 0xEAFC02;
		t.verticalAlign = "middle";
		t.width = 127.05;
		t.x = 1141.37;
		t.y = 313.89;
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 35;
		t.source = "Total-Exhibition--Score_png";
		t.width = 121;
		t.x = 937.52;
		t.y = 174.55;
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.source = "bar_info_di_19_png";
		t.width = 170;
		t.x = 927.02;
		t.y = 224.71;
		return t;
	};
	_proto._Image64_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47;
		t.source = "Total-Number-of-Horse_png";
		t.width = 151.67;
		t.x = 937.52;
		t.y = 234.87;
		return t;
	};
	_proto._Image65_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.source = "bar_info_di_19_png";
		t.width = 170;
		t.x = 1119.02;
		t.y = 226.02;
		return t;
	};
	_proto._Image66_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.33;
		t.source = "Rewards-everyday_png";
		t.width = 189.68;
		t.x = 1110.52;
		t.y = 250.31;
		return t;
	};
	_proto._Image67_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.source = "bar_info_di_19_png";
		t.width = 170;
		t.x = 927.02;
		t.y = 439.93;
		return t;
	};
	_proto._Image68_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22.33;
		t.source = "Horse_png";
		t.width = 189.68;
		t.x = 918.51;
		t.y = 461.38;
		return t;
	};
	_proto._Image69_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 125;
		t.source = "bar_info_di_19_png";
		t.width = 170;
		t.x = 1119.02;
		t.y = 441.24;
		return t;
	};
	_proto._Image70_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.33;
		t.source = "Rewards-everyday_png";
		t.width = 189.68;
		t.x = 1110.52;
		t.y = 462.65;
		return t;
	};
	_proto._Image71_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scale9Grid = new egret.Rectangle(4,4,193,66);
		t.source = "btn_info3_png";
		t.width = 418;
		t.x = 904.02;
		t.y = 612.46;
		return t;
	};
	_proto.clain_rewards_btn_i = function () {
		var t = new eui.Image();
		this.clain_rewards_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.name = "clain_rewards_btn";
		t.source = "Claim-Rewards_png";
		t.width = 405;
		t.x = 910.52;
		t.y = 613.78;
		return t;
	};
	_proto._Image72_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 63;
		t.source = "bar_info_di_3_png";
		t.width = 423;
		t.x = 899.02;
		t.y = 361.14;
		return t;
	};
	_proto._Image73_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 63;
		t.source = "bar_info_di_3_png";
		t.width = 423;
		t.x = 900.02;
		t.y = 74.96;
		return t;
	};
	_proto._Image74_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 63;
		t.source = "My-Exhibition_png";
		t.width = 407;
		t.x = 907.02;
		t.y = 358.72;
		return t;
	};
	_proto._Image75_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "Total-Exhibition_png";
		t.width = 362;
		t.x = 927.02;
		t.y = 70.63;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 1245.02;
		t.y = 578.13;
		t.skinName = LoginUI$Skin76;
		return t;
	};
	_proto._Label65_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "Rewards";
		t.textColor = 0xcff7ee;
		t.x = 968.52;
		t.y = 578.44;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/PlayToEarn_select_02.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin77 = 	(function (_super) {
		__extends(LoginUI$Skin77, _super);
		function LoginUI$Skin77() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin77.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin77;
	})(eui.Skin);

	var LoginUI$Skin78 = 	(function (_super) {
		__extends(LoginUI$Skin78, _super);
		function LoginUI$Skin78() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin78.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin78;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_shop0","btn_shop1","Process_btn_lb"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.btn_shop0_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this.btn_shop1_i(),this._Label6_i(),this.Process_btn_lb_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.source = "title_di_png";
		t.width = 292;
		t.x = 9;
		t.y = 12;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.source = "Cargo-Transportation_png";
		t.width = 232;
		t.x = 21;
		t.y = 28;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 534.33;
		t.source = "bar_info_di1_png";
		t.width = 424;
		t.x = 899.02;
		t.y = 12;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 1292.12;
		t.y = 410.06;
		t.skinName = LoginUI$Skin77;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 178;
		t.source = "bar_info_di21_png";
		t.width = 91;
		t.x = 912.51;
		t.y = 103.05;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 173;
		t.source = "select8_s_png";
		t.visible = false;
		t.width = 92;
		t.x = 912.54;
		t.y = 103.05;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 103;
		t.source = "icon_cargo1_d_png";
		t.width = 88;
		t.x = 911.35;
		t.y = 135.23;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 178;
		t.source = "bar_info_di21_png";
		t.width = 91;
		t.x = 1011.56;
		t.y = 103.05;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 173;
		t.source = "select8_s_png";
		t.visible = false;
		t.width = 92;
		t.x = 1011.57;
		t.y = 103.05;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 103;
		t.source = "icon_cargo2_d_png";
		t.width = 88;
		t.x = 1010.4;
		t.y = 135.23;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 178;
		t.source = "bar_info_di21_png";
		t.width = 91;
		t.x = 1114.85;
		t.y = 103.05;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 173;
		t.source = "select8_s_png";
		t.width = 92;
		t.x = 1114.85;
		t.y = 103.05;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 103;
		t.source = "icon_cargo3_d_png";
		t.width = 88;
		t.x = 1113.69;
		t.y = 135.23;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 178;
		t.source = "bar_info_di21_png";
		t.width = 91;
		t.x = 1218.01;
		t.y = 101.72;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 173;
		t.source = "select8_s_png";
		t.visible = false;
		t.width = 92;
		t.x = 1218.02;
		t.y = 101.72;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 103;
		t.source = "icon_cargo4_d_png";
		t.width = 88;
		t.x = 1216.85;
		t.y = 133.9;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scale9Grid = new egret.Rectangle(4,4,193,66);
		t.source = "btn_info3_png";
		t.width = 418;
		t.x = 893.35;
		t.y = 612.46;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "Process_png";
		t.width = 90;
		t.x = 923.18;
		t.y = 638.3;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.source = "icon_strength2_png";
		t.width = 26;
		t.x = 1144.19;
		t.y = 630.8;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.33;
		t.source = "bar_info_di_3_png";
		t.width = 423;
		t.x = 900.02;
		t.y = 10.96;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.33;
		t.source = "Cargo-Transportation_png";
		t.width = 338;
		t.x = 944.02;
		t.y = 29.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "-20";
		t.x = 1181;
		t.y = 641.31;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 24;
		t.text = "Success Rate:";
		t.textColor = 0xe0cfa1;
		t.width = 199;
		t.x = 944.02;
		t.y = 361;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 24;
		t.text = "Estimate Rewards:";
		t.textColor = 0xE0CFA1;
		t.width = 212.33;
		t.x = 944.02;
		t.y = 409.66;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "80%";
		t.x = 1197;
		t.y = 364;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "80 ~ 100";
		t.x = 1197;
		t.y = 412.66;
		return t;
	};
	_proto.btn_shop1_i = function () {
		var t = new eui.Button();
		this.btn_shop1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 1292.12;
		t.y = 461.39;
		t.skinName = LoginUI$Skin78;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "80 ~ 100";
		t.x = 1197;
		t.y = 463.99;
		return t;
	};
	_proto.Process_btn_lb_i = function () {
		var t = new eui.Label();
		this.Process_btn_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89;
		t.name = "Process_btn_lb";
		t.text = "";
		t.width = 437;
		t.x = 882;
		t.y = 604;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/PlayToEarn_select_03.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin79 = 	(function (_super) {
		__extends(LoginUI$Skin79, _super);
		function LoginUI$Skin79() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin79.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin79;
	})(eui.Skin);

	var LoginUI$Skin80 = 	(function (_super) {
		__extends(LoginUI$Skin80, _super);
		function LoginUI$Skin80() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin80.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin80;
	})(eui.Skin);

	var LoginUI$Skin81 = 	(function (_super) {
		__extends(LoginUI$Skin81, _super);
		function LoginUI$Skin81() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin81.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin81;
	})(eui.Skin);

	var LoginUI$Skin82 = 	(function (_super) {
		__extends(LoginUI$Skin82, _super);
		function LoginUI$Skin82() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin82.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin82;
	})(eui.Skin);

	var LoginUI$Skin83 = 	(function (_super) {
		__extends(LoginUI$Skin83, _super);
		function LoginUI$Skin83() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin83.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin83;
	})(eui.Skin);

	var LoginUI$Skin84 = 	(function (_super) {
		__extends(LoginUI$Skin84, _super);
		function LoginUI$Skin84() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin84.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin84;
	})(eui.Skin);

	var LoginUI$Skin85 = 	(function (_super) {
		__extends(LoginUI$Skin85, _super);
		function LoginUI$Skin85() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin85.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin85;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_shop1","btn_shop0","btn_shop2","btn_shop3","btn_shop4","btn_shop5","btn_shop6","Process_btn_lb"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this.btn_shop1_i(),this.btn_shop0_i(),this._Label10_i(),this.btn_shop2_i(),this._Image14_i(),this._Image15_i(),this._Label11_i(),this.btn_shop3_i(),this._Label12_i(),this.btn_shop4_i(),this._Image16_i(),this._Image17_i(),this._Label13_i(),this.btn_shop5_i(),this._Label14_i(),this.btn_shop6_i(),this.Process_btn_lb_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50;
		t.source = "title_di_png";
		t.width = 292;
		t.x = 9;
		t.y = 12;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27;
		t.source = "Peddlery_png";
		t.width = 120;
		t.x = 39;
		t.y = 28;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 534.33;
		t.source = "bar_info_di1_png";
		t.width = 424;
		t.x = 897.56;
		t.y = 13.88;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 178;
		t.source = "pic_wheat_png";
		t.width = 118;
		t.x = 915.55;
		t.y = 103.05;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 117;
		t.source = "bar_info_di22_png";
		t.width = 117;
		t.x = 918.5;
		t.y = 472.31;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.source = "icon_Small-Profit_png";
		t.width = 104;
		t.x = 924.56;
		t.y = 476.73;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 178;
		t.source = "pic_porcelain_png";
		t.width = 118;
		t.x = 1050.56;
		t.y = 103.05;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 178;
		t.source = "pic_wood_png";
		t.width = 118;
		t.x = 1188.86;
		t.y = 103.05;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scale9Grid = new egret.Rectangle(4,4,193,66);
		t.source = "btn_info3_png";
		t.width = 418;
		t.x = 893.35;
		t.y = 612.46;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "Process_png";
		t.width = 90;
		t.x = 923.18;
		t.y = 638.3;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.source = "icon_strength2_png";
		t.width = 26;
		t.x = 1144.19;
		t.y = 630.8;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.33;
		t.source = "bar_info_di_3_png";
		t.width = 423;
		t.x = 900.02;
		t.y = 10.96;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.33;
		t.source = "Select-Business-Goods_png";
		t.width = 338;
		t.x = 944.02;
		t.y = 29.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "-20";
		t.x = 1181;
		t.y = 641.31;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "-20";
		t.x = 1267.89;
		t.y = 641.31;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 24;
		t.text = "Total Business time";
		t.textColor = 0xe0cfa1;
		t.width = 207;
		t.x = 930.05;
		t.y = 332.21;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.48;
		t.size = 24;
		t.text = "Basic bonus:";
		t.textColor = 0xE0CFA1;
		t.width = 148.69;
		t.x = 931.86;
		t.y = 379.32;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "100";
		t.x = 1183.03;
		t.y = 335.21;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "+0%";
		t.x = 1083.19;
		t.y = 382.32;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.48;
		t.size = 24;
		t.text = "Basic bonus:";
		t.textColor = 0xE0CFA1;
		t.width = 148.69;
		t.x = 931.86;
		t.y = 429.17;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "+0%";
		t.x = 1083.19;
		t.y = 432.17;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.size = 14;
		t.text = "+222";
		t.x = 947.56;
		t.y = 548.23;
		return t;
	};
	_proto.btn_shop1_i = function () {
		var t = new eui.Button();
		this.btn_shop1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 1236.16;
		t.y = 638.05;
		t.skinName = LoginUI$Skin79;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 36;
		t.x = 989.85;
		t.y = 544.73;
		t.skinName = LoginUI$Skin80;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.size = 14;
		t.text = "+222";
		t.x = 947.56;
		t.y = 569.33;
		return t;
	};
	_proto.btn_shop2_i = function () {
		var t = new eui.Button();
		this.btn_shop2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 36;
		t.x = 989.85;
		t.y = 565.83;
		t.skinName = LoginUI$Skin81;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 117;
		t.source = "bar_info_di22_png";
		t.width = 117;
		t.x = 1050.16;
		t.y = 471.31;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.rotation = 359.06;
		t.source = "icon_Normal-profit_png";
		t.width = 104;
		t.x = 1056.22;
		t.y = 475.73;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.rotation = 359.06;
		t.size = 14;
		t.text = "+222";
		t.x = 1079.22;
		t.y = 547.23;
		return t;
	};
	_proto.btn_shop3_i = function () {
		var t = new eui.Button();
		this.btn_shop3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "";
		t.name = "btn_shop3";
		t.rotation = 360;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 36;
		t.x = 1121.51;
		t.y = 543.73;
		t.skinName = LoginUI$Skin82;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.rotation = 359.06;
		t.size = 14;
		t.text = "+222";
		t.x = 1079.22;
		t.y = 568.33;
		return t;
	};
	_proto.btn_shop4_i = function () {
		var t = new eui.Button();
		this.btn_shop4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 36;
		t.x = 1121.51;
		t.y = 564.83;
		t.skinName = LoginUI$Skin83;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.height = 117;
		t.source = "bar_info_di22_png";
		t.width = 117;
		t.x = 1182.94;
		t.y = 469.94;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.height = 69;
		t.rotation = 359.06;
		t.source = "icon_Normal-profit_png";
		t.width = 104;
		t.x = 1189;
		t.y = 474.36;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.rotation = 359.06;
		t.size = 14;
		t.text = "+222";
		t.x = 1212;
		t.y = 545.86;
		return t;
	};
	_proto.btn_shop5_i = function () {
		var t = new eui.Button();
		this.btn_shop5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 36;
		t.x = 1254.29;
		t.y = 542.36;
		t.skinName = LoginUI$Skin84;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.rotation = 359.06;
		t.size = 14;
		t.text = "+222";
		t.x = 1212;
		t.y = 566.96;
		return t;
	};
	_proto.btn_shop6_i = function () {
		var t = new eui.Button();
		this.btn_shop6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 36;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 36;
		t.x = 1254.29;
		t.y = 563.46;
		t.skinName = LoginUI$Skin85;
		return t;
	};
	_proto.Process_btn_lb_i = function () {
		var t = new eui.Label();
		this.Process_btn_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 89;
		t.name = "Process_btn_lb";
		t.text = "";
		t.width = 437;
		t.x = 882;
		t.y = 604;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/PlayToEarn_select.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	function LoginUI() {
		_super.call(this);
		this.skinParts = ["task_01_select_di","task_01_select","task_02_select_di","task_02_select","task_03_select_di","task_03_select"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.task_01_select_di_i(),this.task_01_select_i(),this.task_02_select_di_i(),this.task_02_select_i(),this.task_03_select_di_i(),this.task_03_select_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.task_01_select_di_i = function () {
		var t = new eui.Image();
		this.task_01_select_di = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 612;
		t.name = "task_01_select_di";
		t.source = "select4_s_png";
		t.visible = false;
		t.width = 416;
		t.x = 25;
		t.y = 29;
		return t;
	};
	_proto.task_01_select_i = function () {
		var t = new eui.Image();
		this.task_01_select = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 612;
		t.name = "task_01_select";
		t.source = "bar_list_RE_png";
		t.width = 417;
		t.x = 32;
		t.y = 35;
		return t;
	};
	_proto.task_02_select_di_i = function () {
		var t = new eui.Image();
		this.task_02_select_di = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 612;
		t.name = "task_02_select_di";
		t.source = "select4_s_png";
		t.visible = false;
		t.width = 416;
		t.x = 465.5;
		t.y = 30;
		return t;
	};
	_proto.task_02_select_i = function () {
		var t = new eui.Image();
		this.task_02_select = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 612;
		t.name = "task_02_select";
		t.source = "bar_list_CT_png";
		t.width = 417;
		t.x = 472.5;
		t.y = 36;
		return t;
	};
	_proto.task_03_select_di_i = function () {
		var t = new eui.Image();
		this.task_03_select_di = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 612;
		t.name = "task_03_select_di";
		t.source = "select4_s_png";
		t.visible = false;
		t.width = 416;
		t.x = 903;
		t.y = 31;
		return t;
	};
	_proto.task_03_select_i = function () {
		var t = new eui.Image();
		this.task_03_select = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 612;
		t.name = "task_03_select";
		t.source = "bar_list_P_png";
		t.width = 417;
		t.x = 909;
		t.y = 38;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RankGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["rank","name","desc","desc2","lb","lb2","head","group_1"];
		
		this.height = 78;
		this.width = 808;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 73.58;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 0.7;
		t.y = 0.66;
		t.elementsContent = [this._Image1_i(),this.rank_i(),this.name_i(),this.desc_i(),this.desc2_i(),this.lb_i(),this.lb2_i(),this._Image2_i(),this.head_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72.83;
		t.scale9Grid = new egret.Rectangle(12,12,811,50);
		t.source = "rank_data_normal_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 1.84;
		return t;
	};
	_proto.rank_i = function () {
		var t = new eui.Label();
		this.rank = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.name = "rank";
		t.text = "27";
		t.textColor = 0x566dc2;
		t.width = 47.33;
		t.x = 47.62;
		t.y = 25.67;
		return t;
	};
	_proto.name_i = function () {
		var t = new eui.Label();
		this.name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.03;
		t.name = "name";
		t.text = "无敌掌门人";
		t.textColor = 0x566dc2;
		t.width = 164;
		t.x = 248.54;
		t.y = 23.54;
		return t;
	};
	_proto.desc_i = function () {
		var t = new eui.Label();
		this.desc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.name = "desc";
		t.size = 26;
		t.text = "10";
		t.textAlign = "center";
		t.textColor = 0x566dc2;
		t.verticalAlign = "middle";
		t.width = 67.79;
		t.x = 551.99;
		t.y = 23.95;
		return t;
	};
	_proto.desc2_i = function () {
		var t = new eui.Label();
		this.desc2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.name = "desc2";
		t.size = 26;
		t.text = "11.12%";
		t.textAlign = "center";
		t.textColor = 0x566DC2;
		t.verticalAlign = "middle";
		t.width = 98.79;
		t.x = 695.3;
		t.y = 22.34;
		return t;
	};
	_proto.lb_i = function () {
		var t = new eui.Label();
		this.lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.name = "lb";
		t.size = 26;
		t.text = "胜场 ： ";
		t.textColor = 0x7e8bc4;
		t.width = 88.79;
		t.x = 482.78;
		t.y = 27.2;
		return t;
	};
	_proto.lb2_i = function () {
		var t = new eui.Label();
		this.lb2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.name = "lb2";
		t.size = 26;
		t.text = "胜率 ：";
		t.textColor = 0x7E8BC4;
		t.width = 88.79;
		t.x = 618.78;
		t.y = 27.2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.67;
		t.source = "mini_head";
		t.width = 58.67;
		t.x = 178.98;
		t.y = 11.14;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 50.34;
		t.name = "head";
		t.source = "default_head_png";
		t.width = 54.67;
		t.x = 181.69;
		t.y = 13.5;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RegisteUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin86 = 	(function (_super) {
		__extends(LoginUI$Skin86, _super);
		function LoginUI$Skin86() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin86.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "LoginTexture_json.AuthClose_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin86;
	})(eui.Skin);

	var LoginUI$Skin87 = 	(function (_super) {
		__extends(LoginUI$Skin87, _super);
		function LoginUI$Skin87() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin87.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "LoginTexture_json.Confirm_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin87;
	})(eui.Skin);

	var LoginUI$Skin88 = 	(function (_super) {
		__extends(LoginUI$Skin88, _super);
		function LoginUI$Skin88() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin88.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "LoginTexture_json.Btn_Verification_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin88;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_close","title_registe","title_registe0","btn_confirm_registe","title_registe1","account_lb_txt","invite_lb_txt","title_registe4","verify_lb_txt","title_registe2","password_lb_txt","btn_verify_registe"];
		
		this.height = 640;
		this.width = 1136;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_close_i(),this.title_registe_i(),this.title_registe0_i(),this.btn_confirm_registe_i(),this._Image3_i(),this.title_registe1_i(),this._Image4_i(),this.account_lb_txt_i(),this.invite_lb_txt_i(),this.title_registe4_i(),this._Image5_i(),this.verify_lb_txt_i(),this.title_registe2_i(),this._Image6_i(),this.password_lb_txt_i(),this.btn_verify_registe_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.alpha = 0.5;
		t.height = 640;
		t.source = "topmask_png";
		t.width = 1136;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 405;
		t.source = "LoginTexture_json.Img_toubiao_png";
		t.width = 613;
		t.x = 261.5;
		t.y = 117.5;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.33;
		t.label = "";
		t.name = "btn_close";
		t.width = 68.33;
		t.x = 840.34;
		t.y = 83.83;
		t.skinName = LoginUI$Skin86;
		return t;
	};
	_proto.title_registe_i = function () {
		var t = new eui.Label();
		this.title_registe = t;
		t.name = "title_registe";
		t.size = 35;
		t.text = "注册";
		t.textColor = 0xefba1c;
		t.x = 533.66;
		t.y = 137.49;
		return t;
	};
	_proto.title_registe0_i = function () {
		var t = new eui.Label();
		this.title_registe0 = t;
		t.name = "title_registe";
		t.size = 30;
		t.text = "推广号:";
		t.textColor = 0xede8dc;
		t.x = 362.33;
		t.y = 211.82;
		return t;
	};
	_proto.btn_confirm_registe_i = function () {
		var t = new eui.Button();
		this.btn_confirm_registe = t;
		t.label = "xxx";
		t.name = "btn_confirm_registe";
		t.x = 506.03;
		t.y = 450.33;
		t.skinName = LoginUI$Skin87;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "LoginTexture_json.inputtxt_png";
		t.width = 249.33;
		t.x = 478.42;
		t.y = 206.15;
		return t;
	};
	_proto.title_registe1_i = function () {
		var t = new eui.Label();
		this.title_registe1 = t;
		t.name = "title_registe";
		t.size = 30;
		t.text = "手机号码：";
		t.textColor = 0xEDE8DC;
		t.x = 329.33;
		t.y = 259.82;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "LoginTexture_json.inputtxt_png";
		t.width = 249.33;
		t.x = 478.42;
		t.y = 254.15;
		return t;
	};
	_proto.account_lb_txt_i = function () {
		var t = new eui.TextInput();
		this.account_lb_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "account_lb_txt";
		t.width = 225.99;
		t.x = 490.67;
		t.y = 261.16;
		return t;
	};
	_proto.invite_lb_txt_i = function () {
		var t = new eui.TextInput();
		this.invite_lb_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "invite_lb_txt";
		t.width = 225.99;
		t.x = 490.67;
		t.y = 212.82;
		return t;
	};
	_proto.title_registe4_i = function () {
		var t = new eui.Label();
		this.title_registe4 = t;
		t.name = "title_registe";
		t.size = 30;
		t.text = "验证码:";
		t.textColor = 0xEDE8DC;
		t.x = 363.08;
		t.y = 356.82;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "LoginTexture_json.inputtxt_png";
		t.width = 123.33;
		t.x = 480.17;
		t.y = 351.15;
		return t;
	};
	_proto.verify_lb_txt_i = function () {
		var t = new eui.TextInput();
		this.verify_lb_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "verify_lb_txt";
		t.width = 98.99;
		t.x = 491.84;
		t.y = 356.82;
		return t;
	};
	_proto.title_registe2_i = function () {
		var t = new eui.Label();
		this.title_registe2 = t;
		t.name = "title_registe";
		t.size = 30;
		t.text = "密码:";
		t.textColor = 0xEDE8DC;
		t.x = 392.08;
		t.y = 308.66;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "LoginTexture_json.inputtxt_png";
		t.width = 249.33;
		t.x = 479.17;
		t.y = 302.99;
		return t;
	};
	_proto.password_lb_txt_i = function () {
		var t = new eui.TextInput();
		this.password_lb_txt = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.displayAsPassword = true;
		t.height = 27.33;
		t.name = "password_lb_txt";
		t.width = 225.99;
		t.x = 491.84;
		t.y = 310;
		return t;
	};
	_proto.btn_verify_registe_i = function () {
		var t = new eui.Button();
		this.btn_verify_registe = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.label = "";
		t.name = "btn_verify_registe";
		t.width = 109;
		t.x = 613.67;
		t.y = 351.15;
		t.skinName = LoginUI$Skin88;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RewardGet.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin89 = 	(function (_super) {
		__extends(LoginUI$Skin89, _super);
		function LoginUI$Skin89() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin89.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_yellow_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin89;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["img_slot","img_pro","group_1","group_0","scroll_group0","scroll0","lvget_banner","fighting_parent","btn_close","btn_buy","video_g"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.fighting_parent_i(),this.btn_close_i(),this.video_g_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 351.34;
		t.scale9Grid = new egret.Rectangle(10,10,229,219);
		t.source = "LvGetBg_png";
		t.width = 1089.34;
		t.x = 122.53;
		t.y = 164.36;
		return t;
	};
	_proto.fighting_parent_i = function () {
		var t = new eui.Group();
		this.fighting_parent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 532.67;
		t.name = "fighting_parent";
		t.width = 1142.33;
		t.x = 68.04;
		t.y = 72;
		t.elementsContent = [this.scroll0_i(),this.lvget_banner_i()];
		return t;
	};
	_proto.scroll0_i = function () {
		var t = new eui.Scroller();
		this.scroll0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 337.88;
		t.name = "scroll";
		t.width = 1081.82;
		t.x = 59.5;
		t.y = 133.91;
		t.viewport = this.scroll_group0_i();
		return t;
	};
	_proto.scroll_group0_i = function () {
		var t = new eui.Group();
		this.scroll_group0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 287.38;
		t.name = "scroll_group";
		t.width = 1081.82;
		t.x = 0;
		t.y = 193.33;
		t.elementsContent = [this.img_slot_i(),this.img_pro_i(),this.group_1_i(),this.group_0_i()];
		return t;
	};
	_proto.img_slot_i = function () {
		var t = new eui.Image();
		this.img_slot = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.67;
		t.name = "img_slot";
		t.scale9Grid = new egret.Rectangle(20,5,1084,35);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LvGetSlot_png";
		t.width = 1300;
		t.x = 1.8900000000000006;
		t.y = 198.4;
		return t;
	};
	_proto.img_pro_i = function () {
		var t = new eui.Image();
		this.img_pro = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42.67;
		t.name = "img_pro";
		t.scale9Grid = new egret.Rectangle(24,5,1080,35);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LvGetPro_png";
		t.width = 319.7;
		t.x = 2.980000000000018;
		t.y = 198.4;
		return t;
	};
	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetY = 0;
		t.height = 342;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.x = 34.50000000000003;
		t.y = -6.440000000000055;
		t.elementsContent = [this._Image2_i(),this._Label1_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LvGetPoint_png";
		t.width = 92.73;
		t.x = 42.12;
		t.y = 209.67;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "Lv.30";
		t.textColor = 0x4D71D8;
		t.width = 54.15;
		t.x = 68.15;
		t.y = 282.11;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66.97;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LvGetBottom_png";
		t.width = 120;
		t.x = 30;
		t.y = 126.24;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "hp_03_png";
		t.visible = false;
		t.width = 71;
		t.x = 54;
		t.y = 47;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.source = "diy_2p_png";
		t.width = 122;
		t.x = 27;
		t.y = 19.74;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.source = "sevent_got_png";
		t.width = 32;
		t.x = 132;
		t.y = 120;
		return t;
	};
	_proto.group_0_i = function () {
		var t = new eui.Group();
		this.group_0 = t;
		t.anchorOffsetY = 0;
		t.height = 342;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 180;
		t.x = 218.68;
		t.y = -5.64;
		t.elementsContent = [this._Image7_i(),this._Label2_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 121.51;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LvGetPoint_png";
		t.width = 92.73;
		t.x = 42.12;
		t.y = 209.67;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 22;
		t.text = "Lv.30";
		t.textColor = 0x4D71D8;
		t.width = 54.15;
		t.x = 68.15;
		t.y = 282.11;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66.97;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "LvGetBottom_png";
		t.width = 120;
		t.x = 30;
		t.y = 126.24;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.source = "hp_03_png";
		t.visible = false;
		t.width = 71;
		t.x = 54;
		t.y = 47;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 160;
		t.source = "diy_2p_png";
		t.width = 122;
		t.x = 27;
		t.y = 19.74;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.source = "sevent_get_png";
		t.width = 32;
		t.x = 132;
		t.y = 120;
		return t;
	};
	_proto.lvget_banner_i = function () {
		var t = new eui.Image();
		this.lvget_banner = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 117;
		t.name = "lvget_banner";
		t.source = "LvGetTitle_png";
		t.width = 496;
		t.x = 350.99;
		t.y = 35.95;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.label = "";
		t.name = "btn_close";
		t.width = 66;
		t.x = 1166.99;
		t.y = 145.34;
		t.skinName = LoginUI$Skin89;
		return t;
	};
	_proto.video_g_i = function () {
		var t = new eui.Group();
		this.video_g = t;
		t.anchorOffsetX = 165.15;
		t.anchorOffsetY = 51.52;
		t.height = 104;
		t.name = "video_g";
		t.touchChildren = false;
		t.width = 332;
		t.x = 640.35;
		t.y = 602.19;
		t.elementsContent = [this._Image12_i(),this._Image13_i(),this.btn_buy_i()];
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "btn_type1_1_png";
		t.width = 280;
		t.x = 26.23;
		t.y = 0;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.source = "mini_tv_png";
		t.width = 75;
		t.x = 51.02;
		t.y = 11;
		return t;
	};
	_proto.btn_buy_i = function () {
		var t = new eui.Label();
		this.btn_buy = t;
		t.anchorOffsetX = 78;
		t.anchorOffsetY = 31;
		t.bold = true;
		t.height = 64;
		t.name = "btn_buy";
		t.size = 50;
		t.stroke = 3;
		t.strokeColor = 0xF47B33;
		t.text = "领  取";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 205.25;
		t.y = 49;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RoleInfoUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin90 = 	(function (_super) {
		__extends(LoginUI$Skin90, _super);
		function LoginUI$Skin90() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin90.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_yellow_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin90;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["lb_life","lb_boom","lb_lv","info_name","lb_exp","lb_speed","lb_power","btn_close"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.lb_life_i(),this.lb_boom_i(),this._Label1_i(),this.lb_lv_i(),this.info_name_i(),this.lb_exp_i(),this._Label2_i(),this.lb_speed_i(),this.lb_power_i(),this.btn_close_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 651.85;
		t.source = "role_info_bg_png";
		t.width = 519.72;
		t.x = 390.42;
		t.y = 48.07;
		return t;
	};
	_proto.lb_life_i = function () {
		var t = new eui.Label();
		this.lb_life = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.name = "lb_life";
		t.size = 14;
		t.text = "1(PVE:1)";
		t.textAlign = "center";
		t.textColor = 0x486b8f;
		t.verticalAlign = "middle";
		t.width = 64;
		t.x = 579.04;
		t.y = 261.3;
		return t;
	};
	_proto.lb_boom_i = function () {
		var t = new eui.Label();
		this.lb_boom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.name = "lb_boom";
		t.size = 14;
		t.text = "1(PVE:1)";
		t.textAlign = "center";
		t.textColor = 0x486B8F;
		t.verticalAlign = "middle";
		t.width = 66;
		t.x = 577.04;
		t.y = 320.78;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0x985d3a;
		t.text = "等级";
		t.textAlign = "center";
		t.textColor = 0xfefcfe;
		t.verticalAlign = "middle";
		t.x = 427.24;
		t.y = 454.95;
		return t;
	};
	_proto.lb_lv_i = function () {
		var t = new eui.Label();
		this.lb_lv = t;
		t.name = "lb_lv";
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0x985d3a;
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.x = 502.39;
		t.y = 456.18;
		return t;
	};
	_proto.info_name_i = function () {
		var t = new eui.Label();
		this.info_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43;
		t.name = "info_name";
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0xd85729;
		t.text = "我是技安他哥";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.width = 268;
		t.x = 530.19;
		t.y = 166.71;
		return t;
	};
	_proto.lb_exp_i = function () {
		var t = new eui.Label();
		this.lb_exp = t;
		t.name = "lb_exp";
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0x985d3a;
		t.text = "10000";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.x = 487.19;
		t.y = 489.22;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 30;
		t.stroke = 3;
		t.strokeColor = 0x985d3a;
		t.text = "经验";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.x = 426.6;
		t.y = 489.22;
		return t;
	};
	_proto.lb_speed_i = function () {
		var t = new eui.Label();
		this.lb_speed = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.name = "lb_speed";
		t.size = 14;
		t.text = "1(PVE:1)";
		t.textAlign = "center";
		t.textColor = 0x486B8F;
		t.verticalAlign = "middle";
		t.width = 64;
		t.x = 731.98;
		t.y = 261.3;
		return t;
	};
	_proto.lb_power_i = function () {
		var t = new eui.Label();
		this.lb_power = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.name = "lb_power";
		t.size = 14;
		t.text = "1(PVE:1)";
		t.textAlign = "center";
		t.textColor = 0x486B8F;
		t.verticalAlign = "middle";
		t.width = 69;
		t.x = 729.98;
		t.y = 320.78;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 36;
		t.anchorOffsetY = 32;
		t.height = 69.27;
		t.label = "";
		t.name = "btn_close";
		t.width = 70.67;
		t.x = 845.83;
		t.y = 150.94;
		t.skinName = LoginUI$Skin90;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RoleSelectUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin91 = 	(function (_super) {
		__extends(LoginUI$Skin91, _super);
		function LoginUI$Skin91() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin91.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin91;
	})(eui.Skin);

	var LoginUI$Skin92 = 	(function (_super) {
		__extends(LoginUI$Skin92, _super);
		function LoginUI$Skin92() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin92.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_tv_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin92;
	})(eui.Skin);

	var LoginUI$Skin93 = 	(function (_super) {
		__extends(LoginUI$Skin93, _super);
		function LoginUI$Skin93() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin93.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_heart";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin93;
	})(eui.Skin);

	var LoginUI$Skin94 = 	(function (_super) {
		__extends(LoginUI$Skin94, _super);
		function LoginUI$Skin94() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin94.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_speed";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin94;
	})(eui.Skin);

	var LoginUI$Skin95 = 	(function (_super) {
		__extends(LoginUI$Skin95, _super);
		function LoginUI$Skin95() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin95.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_boom";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin95;
	})(eui.Skin);

	var LoginUI$Skin96 = 	(function (_super) {
		__extends(LoginUI$Skin96, _super);
		function LoginUI$Skin96() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin96.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_weili";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin96;
	})(eui.Skin);

	var LoginUI$Skin97 = 	(function (_super) {
		__extends(LoginUI$Skin97, _super);
		function LoginUI$Skin97() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","role_select_pay_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin97.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "role_select_pay_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin97;
	})(eui.Skin);

	var LoginUI$Skin98 = 	(function (_super) {
		__extends(LoginUI$Skin98, _super);
		function LoginUI$Skin98() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","normal_btn_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin98.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "normal_btn_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin98;
	})(eui.Skin);

	var LoginUI$Skin99 = 	(function (_super) {
		__extends(LoginUI$Skin99, _super);
		function LoginUI$Skin99() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin99.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_zuanshi";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin99;
	})(eui.Skin);

	var LoginUI$Skin100 = 	(function (_super) {
		__extends(LoginUI$Skin100, _super);
		function LoginUI$Skin100() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin100.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_coin";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin100;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["select_role_bg","btn_close","img_buy_bg","lb_name","btn_gold","lb_gold","lb_attr","btn_shop","btn_shop0","btn_shop1","btn_shop2","lb_life","lb_boom","lb_speed","lb_power","scroll_group0","scroll0","fighting_parent","btn_buy","btn_fight","lb_role_click","btn_buy_lb","img_coin_bg","img_zuan_bg","btn_noticetip","btn_shop3","coin_num_lb","zuan_num_lb"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.select_role_bg_i(),this._Image1_i(),this.btn_close_i(),this.img_buy_bg_i(),this.lb_name_i(),this.btn_gold_i(),this.lb_gold_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this.lb_attr_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.btn_shop_i(),this.btn_shop0_i(),this.btn_shop1_i(),this.btn_shop2_i(),this._Label3_i(),this.lb_life_i(),this.lb_boom_i(),this.lb_speed_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this.lb_power_i(),this.fighting_parent_i(),this.btn_buy_i(),this.btn_fight_i(),this.lb_role_click_i(),this.btn_buy_lb_i(),this.img_coin_bg_i(),this.img_zuan_bg_i(),this.btn_noticetip_i(),this.btn_shop3_i(),this.coin_num_lb_i(),this.zuan_num_lb_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.select_role_bg_i = function () {
		var t = new eui.Image();
		this.select_role_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 510;
		t.name = "select_role_bg";
		t.source = "role_select_bg_png";
		t.width = 346;
		t.x = 564.46;
		t.y = 17.57;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 472;
		t.source = "role_select_ground_png";
		t.width = 631;
		t.x = 357.09;
		t.y = 246.37;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 45.71;
		t.anchorOffsetY = 45.71;
		t.height = 100;
		t.label = "";
		t.name = "btn_close";
		t.scaleX = 0.7;
		t.scaleY = 0.7;
		t.width = 94;
		t.x = 40.04;
		t.y = 39.85;
		t.skinName = LoginUI$Skin91;
		return t;
	};
	_proto.img_buy_bg_i = function () {
		var t = new eui.Image();
		this.img_buy_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.name = "img_buy_bg";
		t.scale9Grid = new egret.Rectangle(15,8,264,34);
		t.source = "role_select_down_png";
		t.width = 439.34;
		t.x = 440.12;
		t.y = 638.59;
		return t;
	};
	_proto.lb_name_i = function () {
		var t = new eui.Label();
		this.lb_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31.34;
		t.name = "lb_name";
		t.size = 22;
		t.text = "精神小伙子子";
		t.textAlign = "center";
		t.textColor = 0xdd644b;
		t.verticalAlign = "middle";
		t.width = 140.67;
		t.x = 586.59;
		t.y = 554.77;
		return t;
	};
	_proto.btn_gold_i = function () {
		var t = new eui.Button();
		this.btn_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.33;
		t.label = "";
		t.name = "btn_gold";
		t.width = 38;
		t.x = 541.14;
		t.y = 641.59;
		t.skinName = LoginUI$Skin92;
		return t;
	};
	_proto.lb_gold_i = function () {
		var t = new eui.Label();
		this.lb_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30.33;
		t.name = "lb_gold";
		t.size = 28;
		t.text = "2222";
		t.textAlign = "left";
		t.textColor = 0xfefcfe;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 91;
		t.x = 564.8;
		t.y = 650.09;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 543.67;
		t.scale9Grid = new egret.Rectangle(13,13,122,128);
		t.source = "role_select_right_bg_png";
		t.width = 323.67;
		t.x = 970.37;
		t.y = 145.8;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 48.66;
		t.rotation = 359.83;
		t.size = 30;
		t.text = "角色基础属性";
		t.textAlign = "center";
		t.textColor = 0xb49f6b;
		t.verticalAlign = "middle";
		t.width = 250.01;
		t.x = 1008.5;
		t.y = 167.78;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 28.69;
		t.rotation = 359.83;
		t.size = 26;
		t.text = "属性描述";
		t.textAlign = "center";
		t.textColor = 0xB49F6B;
		t.width = 250.01;
		t.x = 1008.03;
		t.y = 494.99;
		return t;
	};
	_proto.lb_attr_i = function () {
		var t = new eui.Label();
		this.lb_attr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 117.64;
		t.lineSpacing = 8;
		t.name = "lb_attr";
		t.size = 22;
		t.text = "描述文字描述文字描述文字描述文字描述文字描述文字描述文";
		t.textAlign = "left";
		t.textColor = 0x9d6357;
		t.verticalAlign = "middle";
		t.width = 278.91;
		t.x = 1009.4;
		t.y = 531.33;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "role_select_item_bg_png";
		t.width = 310;
		t.x = 975.87;
		t.y = 228.08;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "role_select_item_bg_png";
		t.width = 310;
		t.x = 975.87;
		t.y = 288.41;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "role_select_item_bg_png";
		t.width = 310;
		t.x = 976.74;
		t.y = 348.34;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "role_select_item_bg_png";
		t.width = 310;
		t.x = 976.74;
		t.y = 407.53;
		return t;
	};
	_proto.btn_shop_i = function () {
		var t = new eui.Button();
		this.btn_shop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.label = "";
		t.name = "btn_shop";
		t.width = 40;
		t.x = 1021.32;
		t.y = 240.08;
		t.skinName = LoginUI$Skin93;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.label = "";
		t.name = "btn_shop";
		t.width = 40;
		t.x = 1024.43;
		t.y = 360.66;
		t.skinName = LoginUI$Skin94;
		return t;
	};
	_proto.btn_shop1_i = function () {
		var t = new eui.Button();
		this.btn_shop1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.label = "";
		t.name = "btn_shop";
		t.width = 40;
		t.x = 1023.97;
		t.y = 298.56;
		t.skinName = LoginUI$Skin95;
		return t;
	};
	_proto.btn_shop2_i = function () {
		var t = new eui.Button();
		this.btn_shop2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.label = "";
		t.name = "btn_shop";
		t.width = 40;
		t.x = 1023.1;
		t.y = 418.65;
		t.skinName = LoginUI$Skin96;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31.33;
		t.size = 22;
		t.text = "生命值";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1058.47;
		t.y = 242.43;
		return t;
	};
	_proto.lb_life_i = function () {
		var t = new eui.Label();
		this.lb_life = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31.33;
		t.name = "lb_life";
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1166.53;
		t.y = 241.91;
		return t;
	};
	_proto.lb_boom_i = function () {
		var t = new eui.Label();
		this.lb_boom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31.33;
		t.name = "lb_boom";
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1166.53;
		t.y = 302.24;
		return t;
	};
	_proto.lb_speed_i = function () {
		var t = new eui.Label();
		this.lb_speed = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31.33;
		t.name = "lb_speed";
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1167.15;
		t.y = 364.34;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31.33;
		t.size = 22;
		t.text = "炸弹数";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1058.48;
		t.y = 302.23;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31.33;
		t.size = 22;
		t.text = "速度值";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1053.85;
		t.y = 363.01;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31.33;
		t.size = 22;
		t.text = "威力值";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1055.82;
		t.y = 418.65;
		return t;
	};
	_proto.lb_power_i = function () {
		var t = new eui.Label();
		this.lb_power = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31.33;
		t.name = "lb_power";
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1166.53;
		t.y = 419.86;
		return t;
	};
	_proto.fighting_parent_i = function () {
		var t = new eui.Group();
		this.fighting_parent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 501;
		t.name = "fighting_parent";
		t.width = 359.92;
		t.x = 26.66;
		t.y = 167.48;
		t.elementsContent = [this.scroll0_i()];
		return t;
	};
	_proto.scroll0_i = function () {
		var t = new eui.Scroller();
		this.scroll0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 501.05;
		t.name = "scroll";
		t.width = 359.92;
		t.x = 1.72;
		t.y = 0;
		t.viewport = this.scroll_group0_i();
		return t;
	};
	_proto.scroll_group0_i = function () {
		var t = new eui.Group();
		this.scroll_group0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 506.05;
		t.name = "scroll_group";
		t.width = 359.92;
		t.x = -1;
		t.y = 71;
		return t;
	};
	_proto.btn_buy_i = function () {
		var t = new eui.Button();
		this.btn_buy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.label = "";
		t.name = "btn_buy";
		t.width = 138;
		t.x = 589.84;
		t.y = 625.25;
		t.skinName = LoginUI$Skin97;
		return t;
	};
	_proto.btn_fight_i = function () {
		var t = new eui.Button();
		this.btn_fight = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 27;
		t.height = 56;
		t.label = "出 战";
		t.name = "btn_fight";
		t.width = 138;
		t.x = 658.58;
		t.y = 664.22;
		t.skinName = LoginUI$Skin98;
		return t;
	};
	_proto.lb_role_click_i = function () {
		var t = new eui.Label();
		this.lb_role_click = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 254;
		t.name = "lb_role_click";
		t.text = "";
		t.width = 357;
		t.x = 502;
		t.y = 368.04;
		return t;
	};
	_proto.btn_buy_lb_i = function () {
		var t = new eui.Label();
		this.btn_buy_lb = t;
		t.anchorOffsetX = 68;
		t.anchorOffsetY = 31;
		t.height = 62;
		t.name = "btn_buy_lb";
		t.stroke = 3;
		t.strokeColor = 0xf47b33;
		t.text = "领 取";
		t.textAlign = "center";
		t.textColor = 0xfefcfe;
		t.verticalAlign = "middle";
		t.width = 138;
		t.x = 659.84;
		t.y = 662.25;
		return t;
	};
	_proto.img_coin_bg_i = function () {
		var t = new eui.Image();
		this.img_coin_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "img_coin_bg";
		t.source = "mini_own";
		t.width = 129.33;
		t.x = 684.68;
		t.y = 37.54;
		return t;
	};
	_proto.img_zuan_bg_i = function () {
		var t = new eui.Image();
		this.img_zuan_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "img_zuan_bg";
		t.source = "mini_own";
		t.width = 124;
		t.x = 961.39;
		t.y = 37.54;
		return t;
	};
	_proto.btn_noticetip_i = function () {
		var t = new eui.Button();
		this.btn_noticetip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.label = "";
		t.name = "btn_noticetip";
		t.width = 46;
		t.x = 933.59;
		t.y = 28.64;
		t.skinName = LoginUI$Skin99;
		return t;
	};
	_proto.btn_shop3_i = function () {
		var t = new eui.Button();
		this.btn_shop3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.label = "";
		t.name = "btn_shop";
		t.width = 46;
		t.x = 651.52;
		t.y = 28.64;
		t.skinName = LoginUI$Skin100;
		return t;
	};
	_proto.coin_num_lb_i = function () {
		var t = new eui.Label();
		this.coin_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "coin_num_lb";
		t.size = 26;
		t.text = "2222";
		t.textAlign = "right";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 88.51;
		t.x = 718.41;
		t.y = 40.21;
		return t;
	};
	_proto.zuan_num_lb_i = function () {
		var t = new eui.Label();
		this.zuan_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.name = "zuan_num_lb";
		t.size = 26;
		t.text = "2222";
		t.textAlign = "right";
		t.textColor = 0x476b8d;
		t.verticalAlign = "middle";
		t.width = 89;
		t.x = 989.56;
		t.y = 40.21;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RoleSelectUIGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["role_head","role_name","img_selected","group_1"];
		
		this.height = 113;
		this.width = 354;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 353;
		t.x = 3.7;
		t.y = 2.83;
		t.elementsContent = [this.role_head_i(),this.role_name_i(),this.img_selected_i()];
		return t;
	};
	_proto.role_head_i = function () {
		var t = new eui.Image();
		this.role_head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.name = "role_head";
		t.source = "role_select_p1_png";
		t.width = 353;
		t.x = 3;
		t.y = 1;
		return t;
	};
	_proto.role_name_i = function () {
		var t = new eui.Label();
		this.role_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 31.34;
		t.name = "role_name";
		t.size = 22;
		t.text = "精神小伙子子";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 140.67;
		t.x = 167;
		t.y = 40.83;
		return t;
	};
	_proto.img_selected_i = function () {
		var t = new eui.Image();
		this.img_selected = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.name = "img_selected";
		t.source = "role_select_pick_png";
		t.width = 353;
		t.x = -7;
		t.y = 0;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RoleSelectUII.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin101 = 	(function (_super) {
		__extends(LoginUI$Skin101, _super);
		function LoginUI$Skin101() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin101.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin101;
	})(eui.Skin);

	var LoginUI$Skin102 = 	(function (_super) {
		__extends(LoginUI$Skin102, _super);
		function LoginUI$Skin102() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin102.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_coin";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin102;
	})(eui.Skin);

	var LoginUI$Skin103 = 	(function (_super) {
		__extends(LoginUI$Skin103, _super);
		function LoginUI$Skin103() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin103.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_heart";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin103;
	})(eui.Skin);

	var LoginUI$Skin104 = 	(function (_super) {
		__extends(LoginUI$Skin104, _super);
		function LoginUI$Skin104() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin104.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_speed";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin104;
	})(eui.Skin);

	var LoginUI$Skin105 = 	(function (_super) {
		__extends(LoginUI$Skin105, _super);
		function LoginUI$Skin105() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin105.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_boom";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin105;
	})(eui.Skin);

	var LoginUI$Skin106 = 	(function (_super) {
		__extends(LoginUI$Skin106, _super);
		function LoginUI$Skin106() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin106.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_weili";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin106;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_close","btn_gold","lb_gold","btn_shop","btn_shop0","btn_shop1","btn_shop2"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.btn_close_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this.btn_gold_i(),this.lb_gold_i(),this._Image9_i(),this._Label6_i(),this._Image10_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this.btn_shop_i(),this.btn_shop0_i(),this.btn_shop1_i(),this.btn_shop2_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Label16_i(),this._Label17_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 472;
		t.source = "role_select_ground_png";
		t.width = 631;
		t.x = 394.33;
		t.y = 179.75;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 35;
		t.anchorOffsetY = 31;
		t.height = 69.27;
		t.label = "";
		t.name = "btn_close";
		t.width = 70.67;
		t.x = 61.66;
		t.y = 61.4;
		t.skinName = LoginUI$Skin101;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 348;
		t.source = "role_select_bg_png";
		t.width = 236;
		t.x = 667;
		t.y = 55.56;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "role_select_p1_png";
		t.width = 353;
		t.x = 28.68;
		t.y = 179.75;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "role_select_pick_png";
		t.width = 353;
		t.x = 28.68;
		t.y = 180.41;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "role_select_p2_png";
		t.width = 353;
		t.x = 26.66;
		t.y = 298.56;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "role_select_p1_png";
		t.width = 353;
		t.x = 26.66;
		t.y = 415.99;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 105;
		t.source = "role_select_p2_png";
		t.width = 353;
		t.x = 26.66;
		t.y = 534.83;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.source = "role_select_down_png";
		t.width = 294;
		t.x = 510.69;
		t.y = 571.97;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.34;
		t.size = 22;
		t.text = "精神小伙子子";
		t.textColor = 0x9d6357;
		t.verticalAlign = "middle";
		t.width = 140.67;
		t.x = 203.16;
		t.y = 217.24;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.34;
		t.size = 22;
		t.text = "精神小伙子子";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 140.67;
		t.x = 203.16;
		t.y = 343.66;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.34;
		t.size = 22;
		t.text = "精神小伙子子";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 140.67;
		t.x = 203.16;
		t.y = 452.82;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.34;
		t.size = 22;
		t.text = "精神小伙子子";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 140.67;
		t.x = 201.83;
		t.y = 571.66;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.34;
		t.size = 22;
		t.text = "精神小伙子子";
		t.textColor = 0xdd644b;
		t.verticalAlign = "middle";
		t.width = 140.67;
		t.x = 627.82;
		t.y = 488.15;
		return t;
	};
	_proto.btn_gold_i = function () {
		var t = new eui.Button();
		this.btn_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 45.33;
		t.label = "";
		t.name = "btn_gold";
		t.width = 39.33;
		t.x = 539.24;
		t.y = 578.64;
		t.skinName = LoginUI$Skin102;
		return t;
	};
	_proto.lb_gold_i = function () {
		var t = new eui.Label();
		this.lb_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 15.33;
		t.name = "lb_gold";
		t.size = 24;
		t.text = "2222";
		t.textColor = 0xfefcfe;
		t.width = 60.33;
		t.x = 584.34;
		t.y = 589.93;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.source = "role_select_pay_01_png";
		t.width = 164;
		t.x = 686.49;
		t.y = 562.47;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 33;
		t.anchorOffsetY = 13;
		t.size = 26;
		t.text = "购  买";
		t.textColor = 0xfefcfe;
		t.x = 764.49;
		t.y = 597.3;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 487.67;
		t.scale9Grid = new egret.Rectangle(13,13,122,128);
		t.source = "role_select_right_bg_png";
		t.width = 323.67;
		t.x = 987.67;
		t.y = 145.8;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.rotation = 359.83;
		t.size = 26;
		t.text = "角色基础属性";
		t.textAlign = "center";
		t.textColor = 0xb49f6b;
		t.width = 250.01;
		t.x = 1024.46;
		t.y = 167.78;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28.69;
		t.rotation = 359.83;
		t.size = 26;
		t.text = "属性描述";
		t.textAlign = "center";
		t.textColor = 0xB49F6B;
		t.width = 250.01;
		t.x = 1025.33;
		t.y = 494.99;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87.33;
		t.size = 22;
		t.text = "描述文字描述文字描述文字描述文字描述文字描述文字描述文";
		t.textColor = 0x9d6357;
		t.width = 238;
		t.x = 1037.32;
		t.y = 533;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "role_select_item_bg_png";
		t.width = 310;
		t.x = 994.5;
		t.y = 228.08;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "role_select_item_bg_png";
		t.width = 310;
		t.x = 994.5;
		t.y = 288.41;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "role_select_item_bg_png";
		t.width = 310;
		t.x = 995.37;
		t.y = 348.34;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "role_select_item_bg_png";
		t.width = 310;
		t.x = 995.37;
		t.y = 407.53;
		return t;
	};
	_proto.btn_shop_i = function () {
		var t = new eui.Button();
		this.btn_shop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.label = "";
		t.name = "btn_shop";
		t.width = 46;
		t.x = 1025.33;
		t.y = 236.09;
		t.skinName = LoginUI$Skin103;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.label = "";
		t.name = "btn_shop";
		t.width = 46;
		t.x = 1027.12;
		t.y = 356.67;
		t.skinName = LoginUI$Skin104;
		return t;
	};
	_proto.btn_shop1_i = function () {
		var t = new eui.Button();
		this.btn_shop1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.label = "";
		t.name = "btn_shop";
		t.width = 46;
		t.x = 1026.66;
		t.y = 295.9;
		t.skinName = LoginUI$Skin105;
		return t;
	};
	_proto.btn_shop2_i = function () {
		var t = new eui.Button();
		this.btn_shop2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.label = "";
		t.name = "btn_shop";
		t.width = 46;
		t.x = 1025.79;
		t.y = 414.66;
		t.skinName = LoginUI$Skin106;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.size = 22;
		t.text = "生命值";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1073.12;
		t.y = 242.43;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1181.17;
		t.y = 241.91;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1181.17;
		t.y = 302.24;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1181.79;
		t.y = 364.34;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.size = 22;
		t.text = "炸弹数";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1073.12;
		t.y = 302.23;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.size = 22;
		t.text = "速度值";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1072.5;
		t.y = 363.01;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.size = 22;
		t.text = "威力值";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1073.12;
		t.y = 418.65;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x9D6357;
		t.verticalAlign = "middle";
		t.width = 108.67;
		t.x = 1181.17;
		t.y = 419.98;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RoyalClub.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	var NoticeGroup$Skin107 = 	(function (_super) {
		__extends(NoticeGroup$Skin107, _super);
		function NoticeGroup$Skin107() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin107.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin107;
	})(eui.Skin);

	var NoticeGroup$Skin108 = 	(function (_super) {
		__extends(NoticeGroup$Skin108, _super);
		function NoticeGroup$Skin108() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin108.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin108;
	})(eui.Skin);

	var NoticeGroup$Skin109 = 	(function (_super) {
		__extends(NoticeGroup$Skin109, _super);
		function NoticeGroup$Skin109() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin109.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin109;
	})(eui.Skin);

	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["btn_shop0","pay_main","btn_shop1","main_coin_num_lb0","train_btn_img","total_lb","up_img","down_img","ticket_price_lb","btn_shop2","pay_main_lb"];
		
		this.height = 700;
		this.width = 1100;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.btn_shop0_i(),this.pay_main_i(),this.btn_shop1_i(),this.main_coin_num_lb0_i(),this.train_btn_img_i(),this._Image4_i(),this._Image5_i(),this._Label1_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Label5_i(),this._Image11_i(),this._Image12_i(),this.total_lb_i(),this.up_img_i(),this.down_img_i(),this.ticket_price_lb_i(),this._Label6_i(),this.btn_shop2_i(),this.pay_main_lb_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 667;
		t.source = "market_ticket_png";
		t.width = 1081;
		t.x = 8;
		t.y = 16.5;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "btn_info3_png";
		t.width = 202;
		t.x = 804.92;
		t.y = 511.32;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.source = "bar_info_di_16_png";
		t.width = 181;
		t.x = 815.42;
		t.y = 553.32;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 882.28;
		t.y = 553.67;
		t.skinName = NoticeGroup$Skin107;
		return t;
	};
	_proto.pay_main_i = function () {
		var t = new eui.Label();
		this.pay_main = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "pay_main";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.size = 26;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 910.5;
		t.y = 557.82;
		return t;
	};
	_proto.btn_shop1_i = function () {
		var t = new eui.Button();
		this.btn_shop1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.visible = false;
		t.width = 39;
		t.x = 921.83;
		t.y = 554.19;
		t.skinName = NoticeGroup$Skin108;
		return t;
	};
	_proto.main_coin_num_lb0_i = function () {
		var t = new eui.Label();
		this.main_coin_num_lb0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "main_coin_num_lb";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.size = 26;
		t.text = "2";
		t.textAlign = "left";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.visible = false;
		t.width = 74;
		t.x = 947.4;
		t.y = 558.32;
		return t;
	};
	_proto.train_btn_img_i = function () {
		var t = new eui.Label();
		this.train_btn_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.name = "train_btn_img";
		t.text = "";
		t.visible = false;
		t.width = 242;
		t.x = 789.52;
		t.y = 505.32;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 184;
		t.source = "bar_info_di_25_2_png";
		t.width = 367;
		t.x = 254;
		t.y = 444;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 311;
		t.source = "bar_info_di_26_png";
		t.width = 304;
		t.x = 732;
		t.y = 73;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.67;
		t.size = 14;
		t.text = "15%";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 34;
		t.x = 789;
		t.y = 183.33;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.source = "icon_level_s_png";
		t.width = 22;
		t.x = 856;
		t.y = 53;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.source = "icon_level_a_png";
		t.width = 22;
		t.x = 802;
		t.y = 66;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.source = "icon_level_b_png";
		t.width = 22;
		t.x = 744;
		t.y = 122;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.source = "icon_level_c_png";
		t.width = 22;
		t.x = 767;
		t.y = 358;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.source = "icon_level_d_png";
		t.width = 22;
		t.x = 1036;
		t.y = 192;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.67;
		t.size = 12;
		t.text = "3%";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 34;
		t.x = 864.98;
		t.y = 103;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.67;
		t.size = 14;
		t.text = "7%";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 34;
		t.x = 830.67;
		t.y = 109.01;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.67;
		t.size = 14;
		t.text = "25%";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 34;
		t.x = 807;
		t.y = 275.33;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18.67;
		t.size = 14;
		t.text = "50%";
		t.textAlign = "left";
		t.verticalAlign = "middle";
		t.width = 34;
		t.x = 985;
		t.y = 218;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 25;
		t.source = "Total2_png";
		t.width = 84;
		t.x = 705;
		t.y = 431.5;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 57;
		t.source = "bar_info_di_27_png";
		t.width = 201;
		t.x = 806;
		t.y = 415.5;
		return t;
	};
	_proto.total_lb_i = function () {
		var t = new eui.Label();
		this.total_lb = t;
		t.anchorOffsetX = 0;
		t.name = "total_lb";
		t.text = "1";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 157;
		t.x = 835;
		t.y = 431.5;
		return t;
	};
	_proto.up_img_i = function () {
		var t = new eui.Image();
		this.up_img = t;
		t.height = 24;
		t.name = "up_img";
		t.rotation = 2.05;
		t.source = "btn_point5_png";
		t.width = 34;
		t.x = 1014.52;
		t.y = 415.5;
		return t;
	};
	_proto.down_img_i = function () {
		var t = new eui.Image();
		this.down_img = t;
		t.height = 24;
		t.name = "down_img";
		t.skewX = -180;
		t.source = "btn_point5_png";
		t.width = 34;
		t.x = 1014.52;
		t.y = 472.28;
		return t;
	};
	_proto.ticket_price_lb_i = function () {
		var t = new eui.Label();
		this.ticket_price_lb = t;
		t.anchorOffsetX = 0;
		t.name = "ticket_price_lb";
		t.rotation = 27.26;
		t.text = "888";
		t.textAlign = "center";
		t.textColor = 0xefe02b;
		t.verticalAlign = "middle";
		t.width = 87.64;
		t.x = 512.05;
		t.y = 486.51;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.size = 28;
		t.text = "Confirm";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 133;
		t.x = 840;
		t.y = 520;
		return t;
	};
	_proto.btn_shop2_i = function () {
		var t = new eui.Button();
		this.btn_shop2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.rotation = 33.55;
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 40.67;
		t.x = 585.58;
		t.y = 519.33;
		t.skinName = NoticeGroup$Skin109;
		return t;
	};
	_proto.pay_main_lb_i = function () {
		var t = new eui.Label();
		this.pay_main_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 79;
		t.name = "pay_main_lb";
		t.text = "";
		t.width = 203;
		t.x = 805;
		t.y = 509;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/SaveMapTipUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin110 = 	(function (_super) {
		__extends(LoginUI$Skin110, _super);
		function LoginUI$Skin110() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin110.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin110;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_close_edit","lb_edit_title","btn_confirm_modify","map_sign_tx","bg_new","map_name_tx"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.btn_close_edit_i(),this.lb_edit_title_i(),this.btn_confirm_modify_i(),this._Image2_i(),this.map_sign_tx_i(),this.bg_new_i(),this.map_name_tx_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 437.39;
		t.source = "shop_bg_png";
		t.width = 777.88;
		t.x = 295.06;
		t.y = 127.3;
		return t;
	};
	_proto.btn_close_edit_i = function () {
		var t = new eui.Button();
		this.btn_close_edit = t;
		t.anchorOffsetX = 34;
		t.anchorOffsetY = 32;
		t.height = 67.33;
		t.label = "";
		t.name = "btn_close_edit";
		t.width = 68.33;
		t.x = 997.78;
		t.y = 140.85;
		t.skinName = LoginUI$Skin110;
		return t;
	};
	_proto.lb_edit_title_i = function () {
		var t = new eui.Label();
		this.lb_edit_title = t;
		t.name = "lb_edit_title";
		t.size = 28;
		t.text = "保存地图";
		t.textColor = 0x1c93ed;
		t.x = 615.07;
		t.y = 162.18;
		return t;
	};
	_proto.btn_confirm_modify_i = function () {
		var t = new eui.Button();
		this.btn_confirm_modify = t;
		t.anchorOffsetX = 50;
		t.anchorOffsetY = 23;
		t.height = 44;
		t.label = "提交";
		t.name = "btn_confirm_modify";
		t.width = 102;
		t.x = 683;
		t.y = 494.78;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 136.42;
		t.scale9Grid = new egret.Rectangle(8,4,151,31);
		t.source = "LoginTexture_json.inputtxt_png";
		t.width = 369.03;
		t.x = 507.4;
		t.y = 276.06;
		return t;
	};
	_proto.map_sign_tx_i = function () {
		var t = new eui.TextInput();
		this.map_sign_tx = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87.94;
		t.name = "map_sign_tx";
		t.text = "输入地图个性签名";
		t.width = 338.11;
		t.x = 528.34;
		t.y = 298.97;
		return t;
	};
	_proto.bg_new_i = function () {
		var t = new eui.Image();
		this.bg_new = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.name = "bg_new";
		t.source = "LoginTexture_json.inputtxt_png";
		t.width = 249.33;
		t.x = 566.67;
		t.y = 211.8;
		return t;
	};
	_proto.map_name_tx_i = function () {
		var t = new eui.TextInput();
		this.map_name_tx = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27.33;
		t.name = "map_name_tx";
		t.text = "输入地图名字";
		t.width = 225.99;
		t.x = 578.34;
		t.y = 220.14;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/SelectShareVsMapUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin111 = 	(function (_super) {
		__extends(LoginUI$Skin111, _super);
		function LoginUI$Skin111() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin111.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_yellow_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin111;
	})(eui.Skin);

	var LoginUI$Skin112 = 	(function (_super) {
		__extends(LoginUI$Skin112, _super);
		function LoginUI$Skin112() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_type2_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin112.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_type1_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin112;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","btn_close","btn_random","btn_mymap","img_left","img_right","btn_certain_map"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_platform_i(),this.btn_close_i(),this.btn_random_i(),this.btn_mymap_i(),this._Button1_i(),this._Label1_i(),this.img_left_i(),this.img_right_i(),this.btn_certain_map_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_platform_i = function () {
		var t = new eui.Image();
		this.fighting_platform = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 610.18;
		t.name = "fighting_platform";
		t.scale9Grid = new egret.Rectangle(28,29,143,143);
		t.source = "fighting_kuang_png";
		t.width = 1165.63;
		t.x = 79.64;
		t.y = 69.91;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75.33;
		t.label = "";
		t.name = "btn_close";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 76.33;
		t.x = 1186.12;
		t.y = 55.76;
		t.skinName = LoginUI$Skin111;
		return t;
	};
	_proto.btn_random_i = function () {
		var t = new eui.Image();
		this.btn_random = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 377;
		t.name = "btn_random";
		t.source = "btn_random_map_png";
		t.width = 488;
		t.x = 139.61;
		t.y = 186.5;
		return t;
	};
	_proto.btn_mymap_i = function () {
		var t = new eui.Image();
		this.btn_mymap = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 377;
		t.name = "btn_mymap";
		t.source = "btn_diy_map_png";
		t.width = 488;
		t.x = 698.12;
		t.y = 186.5;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77.06;
		t.label = "";
		t.width = 170.97;
		t.x = 576.97;
		t.y = 563.5;
		t.skinName = LoginUI$Skin112;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.backgroundColor = 0x000000;
		t.borderColor = 0x000000;
		t.height = 42.12;
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xcae9ff;
		t.text = "选择地图后邀请您的好友一起来玩吧";
		t.textAlign = "center";
		t.textColor = 0x7479db;
		t.verticalAlign = "middle";
		t.width = 484.61;
		t.x = 424.7;
		t.y = 110.03;
		return t;
	};
	_proto.img_left_i = function () {
		var t = new eui.Image();
		this.img_left = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "img_left";
		t.source = "sevent_got_png";
		t.width = 80;
		t.x = 514.24;
		t.y = 460.79;
		return t;
	};
	_proto.img_right_i = function () {
		var t = new eui.Image();
		this.img_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80;
		t.name = "img_right";
		t.source = "sevent_got_png";
		t.visible = false;
		t.width = 80;
		t.x = 1072.03;
		t.y = 460.79;
		return t;
	};
	_proto.btn_certain_map_i = function () {
		var t = new eui.Label();
		this.btn_certain_map = t;
		t.anchorOffsetX = 80;
		t.anchorOffsetY = 34;
		t.height = 66.36;
		t.name = "btn_certain_map";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0xf47b33;
		t.text = "确  定";
		t.textAlign = "center";
		t.textColor = 0xfefcfe;
		t.verticalAlign = "middle";
		t.width = 161.88;
		t.x = 661.97;
		t.y = 600.94;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/SeventDayGet.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin113 = 	(function (_super) {
		__extends(LoginUI$Skin113, _super);
		function LoginUI$Skin113() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin113.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_yellow_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin113;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["shop_banner0","shop_banner4","item_icon_1","shop_banner22","item_state_1","shop_banner","shop_banner1","shop_banner5","shop_banner6","shop_banner7","shop_banner2","shop_banner3","shop_banner25","btn_close","item_icon_2","item_state_2","item_icon_3","item_state_3","item_icon_4","item_state_4","item_icon_5","item_state_5","item_icon_6","item_state_6","item_icon_7","item_state_7","lb_name_1","lb_name_2","lb_name_3","lb_name_4","lb_name_5","lb_name_6","lb_name_7","shop_banner23","shop_banner26","shop_banner27","shop_banner28","shop_banner24","item_lb_1","item_lb_2","item_lb_3","item_lb_4","item_lb_5","item_lb_6","item_lb_7","btn_buy0","video_g"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.shop_banner0_i(),this.shop_banner4_i(),this.item_icon_1_i(),this.shop_banner22_i(),this.item_state_1_i(),this.shop_banner_i(),this.shop_banner1_i(),this.shop_banner5_i(),this.shop_banner6_i(),this.shop_banner7_i(),this.shop_banner2_i(),this.shop_banner3_i(),this.shop_banner25_i(),this.btn_close_i(),this.item_icon_2_i(),this.item_state_2_i(),this.item_icon_3_i(),this.item_state_3_i(),this.item_icon_4_i(),this.item_state_4_i(),this.item_icon_5_i(),this.item_state_5_i(),this.item_icon_6_i(),this.item_state_6_i(),this.item_icon_7_i(),this.item_state_7_i(),this.lb_name_1_i(),this.lb_name_2_i(),this.lb_name_3_i(),this.lb_name_4_i(),this.lb_name_5_i(),this.lb_name_6_i(),this.lb_name_7_i(),this.shop_banner23_i(),this.shop_banner26_i(),this.shop_banner27_i(),this.shop_banner28_i(),this.shop_banner24_i(),this.item_lb_1_i(),this.item_lb_2_i(),this.item_lb_3_i(),this.item_lb_4_i(),this.item_lb_5_i(),this.item_lb_6_i(),this.item_lb_7_i(),this.video_g_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 750;
		t.source = "mask_layer_png";
		t.visible = false;
		t.width = 1334;
		t.x = -1.5;
		t.y = 1.5;
		return t;
	};
	_proto.shop_banner0_i = function () {
		var t = new eui.Image();
		this.shop_banner0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 351.34;
		t.name = "shop_banner";
		t.scale9Grid = new egret.Rectangle(10,51,228,177);
		t.source = "sevent_bg_png";
		t.width = 1145.35;
		t.x = 95.89;
		t.y = 175.63;
		return t;
	};
	_proto.shop_banner4_i = function () {
		var t = new eui.Image();
		this.shop_banner4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 237;
		t.name = "shop_banner";
		t.source = "sevent_item_got_png";
		t.width = 154;
		t.x = 112.59;
		t.y = 263.29;
		return t;
	};
	_proto.item_icon_1_i = function () {
		var t = new eui.Image();
		this.item_icon_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.name = "item_icon_1";
		t.source = "barr_ball_png";
		t.width = 75;
		t.x = 153.26;
		t.y = 307.47;
		return t;
	};
	_proto.shop_banner22_i = function () {
		var t = new eui.Image();
		this.shop_banner22 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.67;
		t.name = "shop_banner";
		t.source = "sevent_one_got_png";
		t.width = 120.67;
		t.x = 132.25;
		t.y = 429.75;
		return t;
	};
	_proto.item_state_1_i = function () {
		var t = new eui.Image();
		this.item_state_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "item_state_1";
		t.source = "sevent_got_png";
		t.width = 40;
		t.x = 208.92;
		t.y = 346.1;
		return t;
	};
	_proto.shop_banner_i = function () {
		var t = new eui.Image();
		this.shop_banner = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 138;
		t.name = "shop_banner";
		t.source = "sevent_title_png";
		t.width = 516;
		t.x = 407.7;
		t.y = 134.57;
		return t;
	};
	_proto.shop_banner1_i = function () {
		var t = new eui.Image();
		this.shop_banner1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 237;
		t.name = "shop_banner";
		t.source = "sevent_item_got_png";
		t.width = 152.67;
		t.x = 594.24;
		t.y = 264.63;
		return t;
	};
	_proto.shop_banner5_i = function () {
		var t = new eui.Image();
		this.shop_banner5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 237;
		t.name = "shop_banner";
		t.source = "sevent_item_got_png";
		t.width = 154;
		t.x = 752.41;
		t.y = 263.3;
		return t;
	};
	_proto.shop_banner6_i = function () {
		var t = new eui.Image();
		this.shop_banner6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 237;
		t.name = "shop_banner";
		t.source = "sevent_item_got_png";
		t.width = 154;
		t.x = 912.37;
		t.y = 261.93;
		return t;
	};
	_proto.shop_banner7_i = function () {
		var t = new eui.Image();
		this.shop_banner7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 237;
		t.name = "shop_banner";
		t.source = "sevent_item_get_png";
		t.width = 154;
		t.x = 1071.71;
		t.y = 261.97;
		return t;
	};
	_proto.shop_banner2_i = function () {
		var t = new eui.Image();
		this.shop_banner2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 237;
		t.name = "shop_banner";
		t.source = "sevent_item_got_png";
		t.width = 154;
		t.x = 273.69;
		t.y = 263.26;
		return t;
	};
	_proto.shop_banner3_i = function () {
		var t = new eui.Image();
		this.shop_banner3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 237;
		t.name = "shop_banner";
		t.source = "sevent_item_got_png";
		t.width = 154;
		t.x = 433.02;
		t.y = 263.29;
		return t;
	};
	_proto.shop_banner25_i = function () {
		var t = new eui.Image();
		this.shop_banner25 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.67;
		t.name = "shop_banner";
		t.source = "sevent_two_got_png";
		t.width = 120.67;
		t.x = 290.69;
		t.y = 428.41;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 33;
		t.anchorOffsetY = 33;
		t.height = 66;
		t.label = "";
		t.name = "btn_close";
		t.width = 66;
		t.x = 1223.26;
		t.y = 183.6;
		t.skinName = LoginUI$Skin113;
		return t;
	};
	_proto.item_icon_2_i = function () {
		var t = new eui.Image();
		this.item_icon_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.name = "item_icon_2";
		t.source = "barr_ball_png";
		t.width = 75;
		t.x = 313.02;
		t.y = 307.47;
		return t;
	};
	_proto.item_state_2_i = function () {
		var t = new eui.Image();
		this.item_state_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "item_state_2";
		t.source = "sevent_get_png";
		t.width = 40;
		t.x = 367.35;
		t.y = 342.08;
		return t;
	};
	_proto.item_icon_3_i = function () {
		var t = new eui.Image();
		this.item_icon_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.name = "item_icon_3";
		t.source = "barr_ball_png";
		t.width = 75;
		t.x = 473.68;
		t.y = 307.47;
		return t;
	};
	_proto.item_state_3_i = function () {
		var t = new eui.Image();
		this.item_state_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "item_state_3";
		t.source = "sevent_get_png";
		t.width = 40;
		t.x = 528.01;
		t.y = 340.76;
		return t;
	};
	_proto.item_icon_4_i = function () {
		var t = new eui.Image();
		this.item_icon_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.name = "item_icon_4";
		t.source = "barr_ball_png";
		t.width = 75;
		t.x = 626.69;
		t.y = 307.47;
		return t;
	};
	_proto.item_state_4_i = function () {
		var t = new eui.Image();
		this.item_state_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "item_state_4";
		t.source = "sevent_get_png";
		t.width = 40;
		t.x = 681.02;
		t.y = 340.75;
		return t;
	};
	_proto.item_icon_5_i = function () {
		var t = new eui.Image();
		this.item_icon_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.name = "item_icon_5";
		t.source = "barr_ball_png";
		t.width = 75;
		t.x = 791.74;
		t.y = 307.47;
		return t;
	};
	_proto.item_state_5_i = function () {
		var t = new eui.Image();
		this.item_state_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "item_state_5";
		t.source = "sevent_get_png";
		t.width = 40;
		t.x = 846.07;
		t.y = 339.43;
		return t;
	};
	_proto.item_icon_6_i = function () {
		var t = new eui.Image();
		this.item_icon_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.name = "item_icon_6";
		t.source = "barr_ball_png";
		t.width = 75;
		t.x = 951.7;
		t.y = 307.47;
		return t;
	};
	_proto.item_state_6_i = function () {
		var t = new eui.Image();
		this.item_state_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "item_state_6";
		t.source = "sevent_get_png";
		t.width = 40;
		t.x = 1006.03;
		t.y = 340.76;
		return t;
	};
	_proto.item_icon_7_i = function () {
		var t = new eui.Image();
		this.item_icon_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.name = "item_icon_7";
		t.source = "barr_ball_png";
		t.width = 75;
		t.x = 1107.91;
		t.y = 307.47;
		return t;
	};
	_proto.item_state_7_i = function () {
		var t = new eui.Image();
		this.item_state_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "item_state_7";
		t.source = "sevent_get_png";
		t.width = 40;
		t.x = 1162.24;
		t.y = 339.42;
		return t;
	};
	_proto.lb_name_1_i = function () {
		var t = new eui.Label();
		this.lb_name_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.34;
		t.name = "lb_name_1";
		t.size = 20;
		t.text = "初级";
		t.textAlign = "center";
		t.textColor = 0xfefcfe;
		t.verticalAlign = "middle";
		t.width = 137.33;
		t.x = 120.91;
		t.y = 391.97;
		return t;
	};
	_proto.lb_name_2_i = function () {
		var t = new eui.Label();
		this.lb_name_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.34;
		t.name = "lb_name_2";
		t.size = 20;
		t.text = "初级";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.width = 137.33;
		t.x = 280.67;
		t.y = 391.97;
		return t;
	};
	_proto.lb_name_3_i = function () {
		var t = new eui.Label();
		this.lb_name_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.34;
		t.name = "lb_name_3";
		t.size = 20;
		t.text = "初级";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.width = 137.33;
		t.x = 442.01;
		t.y = 391.97;
		return t;
	};
	_proto.lb_name_4_i = function () {
		var t = new eui.Label();
		this.lb_name_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.34;
		t.name = "lb_name_4";
		t.size = 20;
		t.text = "初级";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.width = 137.33;
		t.x = 598.71;
		t.y = 391.97;
		return t;
	};
	_proto.lb_name_5_i = function () {
		var t = new eui.Label();
		this.lb_name_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.34;
		t.name = "lb_name_5";
		t.size = 20;
		t.text = "初级";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.width = 137.33;
		t.x = 756.74;
		t.y = 391.97;
		return t;
	};
	_proto.lb_name_6_i = function () {
		var t = new eui.Label();
		this.lb_name_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.34;
		t.name = "lb_name_6";
		t.size = 20;
		t.text = "初级";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.width = 137.33;
		t.x = 919.05;
		t.y = 391.97;
		return t;
	};
	_proto.lb_name_7_i = function () {
		var t = new eui.Label();
		this.lb_name_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.34;
		t.name = "lb_name_7";
		t.size = 20;
		t.text = "初级";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.width = 137.33;
		t.x = 1076.06;
		t.y = 391.97;
		return t;
	};
	_proto.shop_banner23_i = function () {
		var t = new eui.Image();
		this.shop_banner23 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.67;
		t.name = "shop_banner";
		t.source = "sevent_four_got_png";
		t.width = 120.67;
		t.x = 602.91;
		t.y = 423.08;
		return t;
	};
	_proto.shop_banner26_i = function () {
		var t = new eui.Image();
		this.shop_banner26 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.67;
		t.name = "shop_banner";
		t.source = "sevent_five_got_png";
		t.width = 120.67;
		t.x = 765.41;
		t.y = 425.77;
		return t;
	};
	_proto.shop_banner27_i = function () {
		var t = new eui.Image();
		this.shop_banner27 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.67;
		t.name = "shop_banner";
		t.source = "sevent_six_got_png";
		t.width = 120.67;
		t.x = 925.37;
		t.y = 427.09;
		return t;
	};
	_proto.shop_banner28_i = function () {
		var t = new eui.Image();
		this.shop_banner28 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.67;
		t.name = "shop_banner";
		t.source = "sevent_sevent_get_png";
		t.width = 120.67;
		t.x = 1084.71;
		t.y = 427.1;
		return t;
	};
	_proto.shop_banner24_i = function () {
		var t = new eui.Image();
		this.shop_banner24 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 47.67;
		t.name = "shop_banner";
		t.source = "sevent_three_got_png";
		t.width = 120.67;
		t.x = 447.35;
		t.y = 425.76;
		return t;
	};
	_proto.item_lb_1_i = function () {
		var t = new eui.Label();
		this.item_lb_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 211.21;
		t.name = "item_lb_1";
		t.text = "";
		t.width = 153.45;
		t.x = 113.13;
		t.y = 280.51;
		return t;
	};
	_proto.item_lb_2_i = function () {
		var t = new eui.Label();
		this.item_lb_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 212.55;
		t.name = "item_lb_2";
		t.text = "";
		t.width = 150.79;
		t.x = 274.59;
		t.y = 280.5;
		return t;
	};
	_proto.item_lb_3_i = function () {
		var t = new eui.Label();
		this.item_lb_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 212.54;
		t.name = "item_lb_3";
		t.text = "";
		t.width = 152.11;
		t.x = 434.93;
		t.y = 279.29;
		return t;
	};
	_proto.item_lb_4_i = function () {
		var t = new eui.Label();
		this.item_lb_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 215.21;
		t.name = "item_lb_4";
		t.text = "";
		t.width = 148.12;
		t.x = 597.16;
		t.y = 278.3;
		return t;
	};
	_proto.item_lb_5_i = function () {
		var t = new eui.Label();
		this.item_lb_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 211.21;
		t.name = "item_lb_5";
		t.text = "";
		t.width = 153.45;
		t.x = 752.41;
		t.y = 278.43;
		return t;
	};
	_proto.item_lb_6_i = function () {
		var t = new eui.Label();
		this.item_lb_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 211.21;
		t.name = "item_lb_6";
		t.text = "";
		t.width = 148.12;
		t.x = 915.26;
		t.y = 276.19;
		return t;
	};
	_proto.item_lb_7_i = function () {
		var t = new eui.Label();
		this.item_lb_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 236.54;
		t.name = "item_lb_7";
		t.text = "";
		t.width = 152.12;
		t.x = 1071.71;
		t.y = 253.83;
		return t;
	};
	_proto.video_g_i = function () {
		var t = new eui.Group();
		this.video_g = t;
		t.anchorOffsetX = 165.15;
		t.anchorOffsetY = 51.52;
		t.height = 104;
		t.name = "video_g";
		t.touchChildren = false;
		t.width = 332;
		t.x = 664.85;
		t.y = 602.19;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this.btn_buy0_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.source = "btn_type1_1_png";
		t.width = 280;
		t.x = 26.23;
		t.y = 0;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 75;
		t.source = "mini_tv_png";
		t.width = 75;
		t.x = 51.02;
		t.y = 11;
		return t;
	};
	_proto.btn_buy0_i = function () {
		var t = new eui.Label();
		this.btn_buy0 = t;
		t.anchorOffsetX = 78;
		t.anchorOffsetY = 31;
		t.bold = true;
		t.height = 64;
		t.name = "btn_buy";
		t.size = 50;
		t.stroke = 3;
		t.strokeColor = 0xF47B33;
		t.text = "领  取";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 156;
		t.x = 205.25;
		t.y = 49;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/ShopItemGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["shop_item_bg","shop_item_icon","shop_item_name","shop_item_money","shop_item_pay","shop_item_click","group_1"];
		
		this.height = 230;
		this.width = 180;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetY = 0;
		t.height = 230;
		t.name = "group_1";
		t.width = 180;
		t.x = 0;
		t.y = 2;
		t.elementsContent = [this.shop_item_bg_i(),this.shop_item_icon_i(),this.shop_item_name_i(),this.shop_item_money_i(),this.shop_item_pay_i(),this.shop_item_click_i()];
		return t;
	};
	_proto.shop_item_bg_i = function () {
		var t = new eui.Image();
		this.shop_item_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 223;
		t.name = "shop_item_bg";
		t.source = "shop_item_not_png";
		t.width = 173;
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto.shop_item_icon_i = function () {
		var t = new eui.Image();
		this.shop_item_icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 100;
		t.name = "shop_item_icon";
		t.source = "mini_speed";
		t.width = 100;
		t.x = 42;
		t.y = 64;
		return t;
	};
	_proto.shop_item_name_i = function () {
		var t = new eui.Label();
		this.shop_item_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 22;
		t.name = "shop_item_name";
		t.size = 20;
		t.text = "运动健将运";
		t.textAlign = "center";
		t.textColor = 0xfefcfe;
		t.verticalAlign = "middle";
		t.width = 134;
		t.x = 23;
		t.y = 22;
		return t;
	};
	_proto.shop_item_money_i = function () {
		var t = new eui.Label();
		this.shop_item_money = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.name = "shop_item_money";
		t.size = 22;
		t.text = "2";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.width = 86;
		t.x = 62.5;
		t.y = 181.5;
		return t;
	};
	_proto.shop_item_pay_i = function () {
		var t = new eui.Image();
		this.shop_item_pay = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.name = "shop_item_pay";
		t.source = "mini_coin";
		t.width = 21;
		t.x = 51.5;
		t.y = 181;
		return t;
	};
	_proto.shop_item_click_i = function () {
		var t = new eui.Label();
		this.shop_item_click = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 228;
		t.name = "shop_item_click";
		t.text = "";
		t.width = 179;
		t.x = 0;
		t.y = 0;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/SkillGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["skill_icon","skill_name","skill_lv","skill_desc","skill_desc2","skill_tip","skill_pay","skill_cost","skill_btn","skill_learn","group_1"];
		
		this.height = 157;
		this.width = 702;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 146;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 702;
		t.x = 0;
		t.y = 5;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.skill_icon_i(),this.skill_name_i(),this.skill_lv_i(),this.skill_desc_i(),this.skill_desc2_i(),this.skill_tip_i(),this.skill_pay_i(),this.skill_cost_i(),this.skill_btn_i(),this.skill_learn_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetY = 0;
		t.height = 145;
		t.source = "skill_item_bg_png";
		t.width = 697;
		t.x = 2;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 107;
		t.source = "skill_item_kuang_png";
		t.width = 107;
		t.x = 16;
		t.y = 9;
		return t;
	};
	_proto.skill_icon_i = function () {
		var t = new eui.Image();
		this.skill_icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 91;
		t.name = "skill_icon";
		t.source = "skill_jingu_png";
		t.width = 91;
		t.x = 24;
		t.y = 17;
		return t;
	};
	_proto.skill_name_i = function () {
		var t = new eui.Label();
		this.skill_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.name = "skill_name";
		t.size = 24;
		t.text = "技能名称xx";
		t.textAlign = "left";
		t.textColor = 0x4761a5;
		t.verticalAlign = "middle";
		t.width = 124;
		t.x = 135;
		t.y = 5;
		return t;
	};
	_proto.skill_lv_i = function () {
		var t = new eui.Label();
		this.skill_lv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.name = "skill_lv";
		t.size = 24;
		t.text = "Lv.25/30";
		t.textAlign = "left";
		t.textColor = 0x6791e7;
		t.verticalAlign = "middle";
		t.width = 113;
		t.x = 261;
		t.y = 5;
		return t;
	};
	_proto.skill_desc_i = function () {
		var t = new eui.Label();
		this.skill_desc = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.name = "skill_desc";
		t.size = 20;
		t.text = "技能的简单爸爸爸爸爸爸爸爸爸爸";
		t.textAlign = "left";
		t.textColor = 0x6f7da2;
		t.verticalAlign = "top";
		t.width = 418;
		t.x = 135;
		t.y = 36.5;
		return t;
	};
	_proto.skill_desc2_i = function () {
		var t = new eui.Label();
		this.skill_desc2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49;
		t.name = "skill_desc2";
		t.size = 20;
		t.text = "技能的简单爸爸爸爸爸爸爸爸爸爸";
		t.textAlign = "left";
		t.textColor = 0x6F7DA2;
		t.verticalAlign = "top";
		t.width = 419;
		t.x = 135;
		t.y = 88;
		return t;
	};
	_proto.skill_tip_i = function () {
		var t = new eui.Label();
		this.skill_tip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 54;
		t.name = "skill_tip";
		t.size = 26;
		t.text = "敬请期待";
		t.textAlign = "center";
		t.textColor = 0x6e98b6;
		t.verticalAlign = "middle";
		t.width = 112;
		t.x = 572;
		t.y = 43;
		return t;
	};
	_proto.skill_pay_i = function () {
		var t = new eui.Image();
		this.skill_pay = t;
		t.height = 30;
		t.name = "skill_pay";
		t.source = "mini_coin";
		t.width = 30;
		t.x = 572;
		t.y = 29;
		return t;
	};
	_proto.skill_cost_i = function () {
		var t = new eui.Label();
		this.skill_cost = t;
		t.anchorOffsetX = 0;
		t.name = "skill_cost";
		t.size = 24;
		t.text = "100000";
		t.textAlign = "left";
		t.textColor = 0x7c4b3c;
		t.verticalAlign = "middle";
		t.width = 92;
		t.x = 602;
		t.y = 32;
		return t;
	};
	_proto.skill_btn_i = function () {
		var t = new eui.Image();
		this.skill_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 46;
		t.name = "skill_btn";
		t.source = "normal_btn_1_png";
		t.width = 117;
		t.x = 572;
		t.y = 65.5;
		return t;
	};
	_proto.skill_learn_i = function () {
		var t = new eui.Label();
		this.skill_learn = t;
		t.anchorOffsetX = 48;
		t.anchorOffsetY = 20;
		t.height = 37;
		t.name = "skill_learn";
		t.size = 28;
		t.stroke = 3;
		t.strokeColor = 0x3379ed;
		t.text = "学习";
		t.textAlign = "center";
		t.textColor = 0xfffef9;
		t.verticalAlign = "middle";
		t.width = 97;
		t.x = 630;
		t.y = 89;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/SkillUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin114 = 	(function (_super) {
		__extends(LoginUI$Skin114, _super);
		function LoginUI$Skin114() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","skill_tip_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin114.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "skill_tip_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin114;
	})(eui.Skin);

	var LoginUI$Skin115 = 	(function (_super) {
		__extends(LoginUI$Skin115, _super);
		function LoginUI$Skin115() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_close_blue_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin115.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_close_blue_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin115;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","scroll_group","scroll","btn_tip","fighting_parent","btn_close"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_parent_i(),this.btn_close_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_parent_i = function () {
		var t = new eui.Group();
		this.fighting_parent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 738;
		t.name = "fighting_parent";
		t.width = 1077;
		t.x = 101.23;
		t.y = 6;
		t.elementsContent = [this.fighting_platform_i(),this.scroll_i(),this.btn_tip_i(),this._Label1_i()];
		return t;
	};
	_proto.fighting_platform_i = function () {
		var t = new eui.Image();
		this.fighting_platform = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 471.57;
		t.name = "fighting_platform";
		t.scale9Grid = new egret.Rectangle(4,64,171,113);
		t.source = "main_setting_bg_png";
		t.width = 732;
		t.x = 185.44;
		t.y = 103.73;
		return t;
	};
	_proto.scroll_i = function () {
		var t = new eui.Scroller();
		this.scroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 395.45;
		t.name = "scroll";
		t.width = 721.21;
		t.x = 191.61;
		t.y = 171.66;
		t.viewport = this.scroll_group_i();
		return t;
	};
	_proto.scroll_group_i = function () {
		var t = new eui.Group();
		this.scroll_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 436.36;
		t.name = "scroll_group";
		t.width = 719.69;
		t.x = -7.58;
		t.y = 0;
		return t;
	};
	_proto.btn_tip_i = function () {
		var t = new eui.Button();
		this.btn_tip = t;
		t.anchorOffsetX = 20;
		t.anchorOffsetY = 24;
		t.height = 44;
		t.label = "";
		t.name = "btn_tip";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 44;
		t.x = 216.8;
		t.y = 138.68;
		t.skinName = LoginUI$Skin114;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 36;
		t.text = "技能详情";
		t.textAlign = "center";
		t.textColor = 0x404e73;
		t.verticalAlign = "middle";
		t.x = 473.22;
		t.y = 119.56;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 38;
		t.height = 70.66;
		t.label = "";
		t.name = "btn_close";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64.67;
		t.x = 1008.18;
		t.y = 116.96;
		t.skinName = LoginUI$Skin115;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/StablesPageUI.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["horse_up_point","horse_up_point_click","res_group","res_scroller","horse_panel_group"];
		
		this.height = 461.07;
		this.width = 658.23;
		this.elementsContent = [this.horse_panel_group_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.horse_panel_group_i = function () {
		var t = new eui.Group();
		this.horse_panel_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 130.91;
		t.name = "horse_panel_group";
		t.width = -69.28;
		t.x = 0;
		t.y = 0;
		t.elementsContent = [this._Image1_i(),this.horse_up_point_i(),this.horse_up_point_click_i(),this.res_scroller_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 446.33;
		t.scale9Grid = new egret.Rectangle(28,66,583,111);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_txopt_di_png";
		t.width = 670;
		t.x = 0;
		t.y = 0;
		return t;
	};
	_proto.horse_up_point_i = function () {
		var t = new eui.Image();
		this.horse_up_point = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.name = "horse_up_point";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "btn_point1_png";
		t.width = 36;
		t.x = 310.67;
		t.y = 26.45;
		return t;
	};
	_proto.horse_up_point_click_i = function () {
		var t = new eui.Label();
		this.horse_up_point_click = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.name = "horse_up_point_click";
		t.text = "";
		t.width = 82;
		t.x = 288.12;
		t.y = 20.95;
		return t;
	};
	_proto.res_scroller_i = function () {
		var t = new eui.Scroller();
		this.res_scroller = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 382.33;
		t.name = "res_scroller";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 621;
		t.x = 22.67;
		t.y = 62.67;
		t.viewport = this.res_group_i();
		return t;
	};
	_proto.res_group_i = function () {
		var t = new eui.Group();
		this.res_group = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 382.33;
		t.name = "res_group";
		t.width = 624;
		t.x = -1.52;
		t.y = -253.03;
		t.elementsContent = [this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "info_tx_frame_png";
		t.width = 88;
		t.x = 12.72;
		t.y = 33.37;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 16.35;
		t.y = 35;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 136.35;
		t.y = 35;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 256.35;
		t.y = 35;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 16.35;
		t.y = 155;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 16.35;
		t.y = 275;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 16.35;
		t.y = 395;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 376.35;
		t.y = 35;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 496.35;
		t.y = 35;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/StablesPedigreeUI.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["lv_img","horse_head","star_1","star_2","star_3","star_4","star_5","horse_name","horse_stat_lb","horse_skill_lb","horse_pedigree_lb"];
		
		this.height = 635;
		this.width = 433;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.lv_img_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.horse_head_i(),this.star_1_i(),this.star_2_i(),this.star_3_i(),this.star_4_i(),this.star_5_i(),this.horse_name_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.horse_stat_lb_i(),this._Image9_i(),this.horse_skill_lb_i(),this._Image10_i(),this.horse_pedigree_lb_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Label1_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Label2_i(),this._Scroller1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 582;
		t.source = "bar_info_di1_png";
		t.width = 362;
		t.x = 1;
		t.y = 107.68;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 582;
		t.source = "bar_info_di1_png";
		t.visible = false;
		t.width = 362;
		t.x = 0;
		t.y = 103.68;
		return t;
	};
	_proto.lv_img_i = function () {
		var t = new eui.Image();
		this.lv_img = t;
		t.height = 80;
		t.name = "lv_img";
		t.source = "icon_level_s_png";
		t.width = 76;
		t.x = 16;
		t.y = 16;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.source = "bar_name_png";
		t.width = 188;
		t.x = 108.33;
		t.y = 25;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "info_tx_frame_png";
		t.width = 88;
		t.x = 270.32;
		t.y = 12.37;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 273.95;
		t.y = 16;
		return t;
	};
	_proto.horse_head_i = function () {
		var t = new eui.Image();
		this.horse_head = t;
		t.height = 82;
		t.name = "horse_head";
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 273.95;
		t.y = 16;
		return t;
	};
	_proto.star_1_i = function () {
		var t = new eui.Image();
		this.star_1 = t;
		t.height = 36;
		t.name = "star_1";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 93.04;
		t.y = 62.36;
		return t;
	};
	_proto.star_2_i = function () {
		var t = new eui.Image();
		this.star_2 = t;
		t.height = 36;
		t.name = "star_2";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 128.04;
		t.y = 62;
		return t;
	};
	_proto.star_3_i = function () {
		var t = new eui.Image();
		this.star_3 = t;
		t.height = 36;
		t.name = "star_3";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 163.04;
		t.y = 62.36;
		return t;
	};
	_proto.star_4_i = function () {
		var t = new eui.Image();
		this.star_4 = t;
		t.height = 36;
		t.name = "star_4";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 198.04;
		t.y = 62.36;
		return t;
	};
	_proto.star_5_i = function () {
		var t = new eui.Image();
		this.star_5 = t;
		t.height = 36;
		t.name = "star_5";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 233.04;
		t.y = 62.36;
		return t;
	};
	_proto.horse_name_i = function () {
		var t = new eui.Label();
		this.horse_name = t;
		t.anchorOffsetX = 0;
		t.name = "horse_name";
		t.size = 18;
		t.text = "Ferrari";
		t.textAlign = "center";
		t.width = 146;
		t.x = 116;
		t.y = 32;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "bar_info_di_3_png";
		t.width = 362;
		t.x = 1;
		t.y = 431;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "Gene-factor_png";
		t.width = 362;
		t.x = -1.46;
		t.y = 431;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "rightbar_s_png";
		t.visible = false;
		t.width = 59;
		t.x = 360;
		t.y = 213;
		return t;
	};
	_proto.horse_stat_lb_i = function () {
		var t = new eui.Image();
		this.horse_stat_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "horse_stat_lb";
		t.source = "icon_stats_n_png";
		t.width = 59;
		t.x = 360;
		t.y = 213;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "rightbar_s_png";
		t.visible = false;
		t.width = 59;
		t.x = 360;
		t.y = 312;
		return t;
	};
	_proto.horse_skill_lb_i = function () {
		var t = new eui.Image();
		this.horse_skill_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "horse_skill_lb";
		t.source = "icon_skill_n_png";
		t.width = 59;
		t.x = 360;
		t.y = 312;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "rightbar_s_png";
		t.width = 59;
		t.x = 360;
		t.y = 412;
		return t;
	};
	_proto.horse_pedigree_lb_i = function () {
		var t = new eui.Image();
		this.horse_pedigree_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "horse_pedigree_lb";
		t.source = "icon_pedigree_s_png";
		t.width = 59;
		t.x = 360;
		t.y = 412;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.source = "bar_info_Gener_di_png";
		t.width = 81;
		t.x = 17.75;
		t.y = 502.5;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "tx2_1_png";
		t.width = 53;
		t.x = 32.04;
		t.y = 514.5;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.source = "horse01_head02_png";
		t.width = 53;
		t.x = 32.04;
		t.y = 514.5;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 28.75;
		t.y = 590.75;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 40.5;
		t.y = 590.75;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 52.25;
		t.y = 590.75;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 64.5;
		t.y = 590.75;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 76.29;
		t.y = 590.75;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.size = 10;
		t.text = "Ferrari xxxx";
		t.textAlign = "center";
		t.textColor = 0x070202;
		t.verticalAlign = "middle";
		t.width = 67;
		t.x = 25;
		t.y = 572.5;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_level_png";
		t.width = 30;
		t.x = 17.75;
		t.y = 502.5;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.source = "icon_level_s_png";
		t.width = 14;
		t.x = 25.75;
		t.y = 508.5;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 105;
		t.y = 560;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 156.5;
		t.y = 560;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 208.02;
		t.y = 560;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 260.03;
		t.y = 560;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "info_gene_frame_png";
		t.width = 39;
		t.x = 311.7;
		t.y = 560;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "icon_gene1_png";
		t.width = 39;
		t.x = 105;
		t.y = 560;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "icon_gene2_png";
		t.width = 39;
		t.x = 156.5;
		t.y = 560;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "icon_gene3_png";
		t.width = 39;
		t.x = 208.02;
		t.y = 560;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "icon_gene4_png";
		t.width = 39;
		t.x = 260.03;
		t.y = 560;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.height = 39;
		t.source = "icon_gene5_png";
		t.width = 39;
		t.x = 311.7;
		t.y = 560;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.height = 22;
		t.source = "sign_2_png";
		t.width = 22;
		t.x = 294.82;
		t.y = 518.37;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 28;
		t.size = 16;
		t.text = "10th generation horse";
		t.textAlign = "left";
		t.textColor = 0xad905d;
		t.verticalAlign = "middle";
		t.width = 161;
		t.x = 129.25;
		t.y = 516;
		return t;
	};
	_proto._Scroller1_i = function () {
		var t = new eui.Scroller();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 291;
		t.width = 327;
		t.x = 17;
		t.y = 124;
		t.viewport = this._Group1_i();
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 291;
		t.width = 327;
		t.elementsContent = [this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Label3_i(),this._Image40_i(),this._Image41_i(),this._Image42_i(),this._Image43_i(),this._Image44_i(),this._Image45_i(),this._Image46_i(),this._Image47_i(),this._Image48_i(),this._Image49_i(),this._Label4_i(),this._Image50_i(),this._Image51_i(),this._Image52_i(),this._Image53_i(),this._Image54_i(),this._Image55_i(),this._Image56_i(),this._Image57_i(),this._Image58_i(),this._Image59_i(),this._Image60_i(),this._Image61_i(),this._Label5_i(),this._Image62_i(),this._Image63_i()];
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_info_Gener_di_png";
		t.width = 81;
		t.x = 38.64;
		t.y = 8.5;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tx2_1_png";
		t.width = 53;
		t.x = 52.93000000000001;
		t.y = 20.5;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "horse01_head02_png";
		t.width = 53;
		t.x = 52.93;
		t.y = 20.5;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 49.64;
		t.y = 96.75;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 61.39;
		t.y = 96.75;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 73.14;
		t.y = 96.75;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 85.39;
		t.y = 96.75;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 97.18;
		t.y = 96.75;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 10;
		t.text = "Ferrari Father";
		t.textAlign = "center";
		t.textColor = 0x070202;
		t.verticalAlign = "middle";
		t.width = 67;
		t.x = 45.89;
		t.y = 78.5;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 30;
		t.x = 38.64;
		t.y = 8.5;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_s_png";
		t.width = 14;
		t.x = 46.64;
		t.y = 14.5;
		return t;
	};
	_proto._Image42_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_info_Gener_di_png";
		t.width = 81;
		t.x = 212.64;
		t.y = 10;
		return t;
	};
	_proto._Image43_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tx2_1_png";
		t.width = 53;
		t.x = 226.93;
		t.y = 22;
		return t;
	};
	_proto._Image44_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "horse01_head02_png";
		t.width = 53;
		t.x = 226.93;
		t.y = 22;
		return t;
	};
	_proto._Image45_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 223.64;
		t.y = 98.25;
		return t;
	};
	_proto._Image46_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 235.39;
		t.y = 98.25;
		return t;
	};
	_proto._Image47_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 247.14;
		t.y = 98.25;
		return t;
	};
	_proto._Image48_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 259.39;
		t.y = 98.25;
		return t;
	};
	_proto._Image49_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 271.18;
		t.y = 98.25;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 10;
		t.text = "Ferrari mother";
		t.textAlign = "center";
		t.textColor = 0x070202;
		t.verticalAlign = "middle";
		t.width = 67;
		t.x = 219.89;
		t.y = 80;
		return t;
	};
	_proto._Image50_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 30;
		t.x = 212.64;
		t.y = 10;
		return t;
	};
	_proto._Image51_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_s_png";
		t.width = 14;
		t.x = 220.64;
		t.y = 16;
		return t;
	};
	_proto._Image52_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.rotation = 90;
		t.scale9Grid = new egret.Rectangle(4,0,3,6);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sign_point_2_png";
		t.width = 10;
		t.x = 212.64;
		t.y = 58.5;
		return t;
	};
	_proto._Image53_i = function () {
		var t = new eui.Image();
		t.height = 100;
		t.scale9Grid = new egret.Rectangle(5,0,12,5);
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "sign_point_1_png";
		t.width = 20;
		t.x = 154;
		t.y = 66;
		return t;
	};
	_proto._Image54_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 108;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "bar_info_Gener_di_png";
		t.width = 81;
		t.x = 123.46;
		t.y = 170;
		return t;
	};
	_proto._Image55_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "tx2_1_png";
		t.width = 53;
		t.x = 137.75;
		t.y = 182;
		return t;
	};
	_proto._Image56_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 53;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "horse01_head02_png";
		t.width = 53;
		t.x = 137.75;
		t.y = 182;
		return t;
	};
	_proto._Image57_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 134.46;
		t.y = 258.25;
		return t;
	};
	_proto._Image58_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 146.21;
		t.y = 258.25;
		return t;
	};
	_proto._Image59_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 157.96;
		t.y = 258.25;
		return t;
	};
	_proto._Image60_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 170.21;
		t.y = 258.25;
		return t;
	};
	_proto._Image61_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 12;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_stars_png";
		t.width = 12;
		t.x = 182;
		t.y = 258.25;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 10;
		t.text = "Ferrari xxxx";
		t.textAlign = "center";
		t.textColor = 0x070202;
		t.verticalAlign = "middle";
		t.width = 67;
		t.x = 130.71;
		t.y = 240;
		return t;
	};
	_proto._Image62_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 30;
		t.x = 123.46;
		t.y = 170;
		return t;
	};
	_proto._Image63_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_s_png";
		t.width = 14;
		t.x = 131.46;
		t.y = 176;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/StablesSkillUI.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["lv_img","horse_head","star_1","star_2","star_3","star_4","star_5","horse_name","grassLand_length","grassLand_value","grassLand_lv","sand_value","sand_lv","mud_value","mud_lv","horse_stat_lb","horse_skill_lb","horse_pedigree_lb"];
		
		this.height = 635;
		this.width = 433;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.lv_img_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this.horse_head_i(),this.star_1_i(),this.star_2_i(),this.star_3_i(),this.star_4_i(),this.star_5_i(),this.horse_name_i(),this.grassLand_length_i(),this.grassLand_value_i(),this._Image6_i(),this.grassLand_lv_i(),this._Image7_i(),this.sand_value_i(),this._Image8_i(),this.sand_lv_i(),this._Image9_i(),this.mud_value_i(),this._Image10_i(),this.mud_lv_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this.horse_stat_lb_i(),this._Image27_i(),this.horse_skill_lb_i(),this._Image28_i(),this.horse_pedigree_lb_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 582;
		t.source = "bar_info_di1_png";
		t.width = 362;
		t.x = 1;
		t.y = 107.68;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 582;
		t.source = "bar_info_di1_png";
		t.visible = false;
		t.width = 362;
		t.x = 0;
		t.y = 103.68;
		return t;
	};
	_proto.lv_img_i = function () {
		var t = new eui.Image();
		this.lv_img = t;
		t.height = 80;
		t.name = "lv_img";
		t.source = "icon_level_s_png";
		t.width = 76;
		t.x = 16;
		t.y = 16;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.source = "bar_name_png";
		t.width = 188;
		t.x = 108.33;
		t.y = 25;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "info_tx_frame_png";
		t.width = 88;
		t.x = 270.32;
		t.y = 12.37;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 273.95;
		t.y = 16;
		return t;
	};
	_proto.horse_head_i = function () {
		var t = new eui.Image();
		this.horse_head = t;
		t.height = 82;
		t.name = "horse_head";
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 273.95;
		t.y = 16;
		return t;
	};
	_proto.star_1_i = function () {
		var t = new eui.Image();
		this.star_1 = t;
		t.height = 36;
		t.name = "star_1";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 93.04;
		t.y = 62.36;
		return t;
	};
	_proto.star_2_i = function () {
		var t = new eui.Image();
		this.star_2 = t;
		t.height = 36;
		t.name = "star_2";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 128.04;
		t.y = 62;
		return t;
	};
	_proto.star_3_i = function () {
		var t = new eui.Image();
		this.star_3 = t;
		t.height = 36;
		t.name = "star_3";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 163.04;
		t.y = 62.36;
		return t;
	};
	_proto.star_4_i = function () {
		var t = new eui.Image();
		this.star_4 = t;
		t.height = 36;
		t.name = "star_4";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 198.04;
		t.y = 62.36;
		return t;
	};
	_proto.star_5_i = function () {
		var t = new eui.Image();
		this.star_5 = t;
		t.height = 36;
		t.name = "star_5";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 233.04;
		t.y = 62.36;
		return t;
	};
	_proto.horse_name_i = function () {
		var t = new eui.Label();
		this.horse_name = t;
		t.anchorOffsetX = 0;
		t.name = "horse_name";
		t.size = 18;
		t.text = "Ferrari";
		t.textAlign = "center";
		t.width = 146;
		t.x = 116;
		t.y = 32;
		return t;
	};
	_proto.grassLand_length_i = function () {
		var t = new eui.Image();
		this.grassLand_length = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.name = "grassLand_length";
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 105.54;
		t.y = 222.18;
		return t;
	};
	_proto.grassLand_value_i = function () {
		var t = new eui.Image();
		this.grassLand_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.name = "grassLand_value";
		t.source = "bar_exp_2_png";
		t.width = 110;
		t.x = 105.54;
		t.y = 222.18;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "icon_Grassland_png";
		t.width = 60;
		t.x = 19.21;
		t.y = 198.18;
		return t;
	};
	_proto.grassLand_lv_i = function () {
		var t = new eui.Image();
		this.grassLand_lv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.name = "grassLand_lv";
		t.source = "icon_level_a_png";
		t.width = 42;
		t.x = 283.95;
		t.y = 208.68;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 110.33;
		t.y = 309;
		return t;
	};
	_proto.sand_value_i = function () {
		var t = new eui.Image();
		this.sand_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.name = "sand_value";
		t.source = "bar_exp_2_png";
		t.width = 110;
		t.x = 104.33;
		t.y = 309;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "icon_sand_png";
		t.width = 60;
		t.x = 18;
		t.y = 291;
		return t;
	};
	_proto.sand_lv_i = function () {
		var t = new eui.Image();
		this.sand_lv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.name = "sand_lv";
		t.source = "icon_level_a_png";
		t.width = 42;
		t.x = 282.74;
		t.y = 295.5;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 109.54;
		t.y = 401;
		return t;
	};
	_proto.mud_value_i = function () {
		var t = new eui.Image();
		this.mud_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.name = "mud_value";
		t.source = "bar_exp_2_png";
		t.width = 110;
		t.x = 103.54;
		t.y = 401;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "icon_Mud_png";
		t.width = 60;
		t.x = 17.21;
		t.y = 377;
		return t;
	};
	_proto.mud_lv_i = function () {
		var t = new eui.Image();
		this.mud_lv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.name = "mud_lv";
		t.source = "icon_level_a_png";
		t.width = 42;
		t.x = 281.95;
		t.y = 387.5;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "bar_info_di_3_png";
		t.width = 362;
		t.x = 0.54;
		t.y = 107.68;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "bar_info_di_3_png";
		t.width = 362;
		t.x = 1;
		t.y = 431;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "Site-suitability_png";
		t.width = 362;
		t.x = -7.46;
		t.y = 107.68;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "skills_png";
		t.width = 362;
		t.x = -1.46;
		t.y = 431;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.height = 22;
		t.source = "sign_2_png";
		t.width = 22;
		t.x = 304.95;
		t.y = 128.18;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 23;
		t.y = 499;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "skill1_png";
		t.width = 62;
		t.x = 23;
		t.y = 499;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "info_skill_framedi_png";
		t.width = 62;
		t.x = 142.54;
		t.y = 499;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "icon_lock_png";
		t.width = 44;
		t.x = 152.54;
		t.y = 508;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "info_skill_framedi_png";
		t.width = 62;
		t.x = 266.32;
		t.y = 499;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "icon_lock_png";
		t.width = 44;
		t.x = 275.32;
		t.y = 508;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "info_skill_framedi_png";
		t.width = 62;
		t.x = 22.21;
		t.y = 566;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "icon_lock_png";
		t.width = 44;
		t.x = 32;
		t.y = 575;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "info_skill_framedi_png";
		t.width = 62;
		t.x = 144.41;
		t.y = 566;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "icon_lock_png";
		t.width = 44;
		t.x = 153.41;
		t.y = 575;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "rightbar_s_png";
		t.visible = false;
		t.width = 59;
		t.x = 360;
		t.y = 213;
		return t;
	};
	_proto.horse_stat_lb_i = function () {
		var t = new eui.Image();
		this.horse_stat_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "horse_stat_lb";
		t.source = "icon_stats_n_png";
		t.width = 59;
		t.x = 360;
		t.y = 213;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "rightbar_s_png";
		t.width = 59;
		t.x = 360;
		t.y = 312;
		return t;
	};
	_proto.horse_skill_lb_i = function () {
		var t = new eui.Image();
		this.horse_skill_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "horse_skill_lb";
		t.source = "icon_skill_s_png";
		t.width = 59;
		t.x = 360;
		t.y = 312;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "rightbar_s_png";
		t.visible = false;
		t.width = 59;
		t.x = 360;
		t.y = 412;
		return t;
	};
	_proto.horse_pedigree_lb_i = function () {
		var t = new eui.Image();
		this.horse_pedigree_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "horse_pedigree_lb";
		t.source = "icon_pedigree_n_png";
		t.width = 59;
		t.x = 360;
		t.y = 412;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/StablesStatUI.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["lv_img","horse_head","star_1","star_2","star_3","star_4","star_5","horse_name","horse_sex","life_time","horse_score","energy_text","energy_length","energy_value","strength_text","strength_value","speed_text","speed_value","dexterity_text","dexterity_value","burst_text","burst_value","stamina_value","wisdom_value","start_value","constitution_value","horse_stat_lb","horse_skill_lb","horse_pedigree_lb","question"];
		
		this.height = 635;
		this.width = 433;
		this.elementsContent = [this._Image1_i(),this.lv_img_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this.horse_head_i(),this.star_1_i(),this.star_2_i(),this.star_3_i(),this.star_4_i(),this.star_5_i(),this.horse_name_i(),this.horse_sex_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this.life_time_i(),this.horse_score_i(),this._Image9_i(),this.energy_text_i(),this._Image10_i(),this._Label1_i(),this.energy_length_i(),this.energy_value_i(),this._Image11_i(),this.strength_text_i(),this._Image12_i(),this.strength_value_i(),this._Image13_i(),this.speed_text_i(),this._Image14_i(),this.speed_value_i(),this._Image15_i(),this.dexterity_text_i(),this._Image16_i(),this.dexterity_value_i(),this._Image17_i(),this.burst_text_i(),this._Image18_i(),this.burst_value_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this.stamina_value_i(),this.wisdom_value_i(),this.start_value_i(),this.constitution_value_i(),this._Image28_i(),this._Image29_i(),this.horse_stat_lb_i(),this._Image30_i(),this.horse_skill_lb_i(),this._Image31_i(),this.horse_pedigree_lb_i(),this.question_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 582;
		t.source = "bar_info_di1_png";
		t.width = 362;
		t.x = 0;
		t.y = 103.68;
		return t;
	};
	_proto.lv_img_i = function () {
		var t = new eui.Image();
		this.lv_img = t;
		t.height = 80;
		t.name = "lv_img";
		t.source = "icon_level_s_png";
		t.width = 76;
		t.x = 16;
		t.y = 16;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 31;
		t.source = "bar_name_png";
		t.width = 188;
		t.x = 108.33;
		t.y = 25;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 90;
		t.source = "info_tx_frame_png";
		t.width = 88;
		t.x = 270.32;
		t.y = 12.37;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.height = 82;
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 273.95;
		t.y = 16;
		return t;
	};
	_proto.horse_head_i = function () {
		var t = new eui.Image();
		this.horse_head = t;
		t.height = 82;
		t.name = "horse_head";
		t.source = "tx1_1_png";
		t.width = 82;
		t.x = 273.95;
		t.y = 16;
		return t;
	};
	_proto.star_1_i = function () {
		var t = new eui.Image();
		this.star_1 = t;
		t.height = 36;
		t.name = "star_1";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 93.04;
		t.y = 62.36;
		return t;
	};
	_proto.star_2_i = function () {
		var t = new eui.Image();
		this.star_2 = t;
		t.height = 36;
		t.name = "star_2";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 128.04;
		t.y = 62;
		return t;
	};
	_proto.star_3_i = function () {
		var t = new eui.Image();
		this.star_3 = t;
		t.height = 36;
		t.name = "star_3";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 163.04;
		t.y = 62.36;
		return t;
	};
	_proto.star_4_i = function () {
		var t = new eui.Image();
		this.star_4 = t;
		t.height = 36;
		t.name = "star_4";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 198.04;
		t.y = 62.36;
		return t;
	};
	_proto.star_5_i = function () {
		var t = new eui.Image();
		this.star_5 = t;
		t.height = 36;
		t.name = "star_5";
		t.source = "icon_stars_png";
		t.width = 35;
		t.x = 233.04;
		t.y = 62.36;
		return t;
	};
	_proto.horse_name_i = function () {
		var t = new eui.Label();
		this.horse_name = t;
		t.anchorOffsetX = 0;
		t.name = "horse_name";
		t.size = 18;
		t.text = "Ferrari";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 116;
		t.y = 32;
		return t;
	};
	_proto.horse_sex_i = function () {
		var t = new eui.Image();
		this.horse_sex = t;
		t.height = 46;
		t.name = "horse_sex";
		t.source = "icon_Male_png";
		t.width = 37;
		t.x = 25;
		t.y = 132;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.height = 18;
		t.source = "icon_heart_png";
		t.width = 18;
		t.x = 143.55;
		t.y = 296;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.height = 18;
		t.source = "icon_heart_png";
		t.width = 18;
		t.x = 164.66;
		t.y = 296;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.height = 18;
		t.source = "icon_heart_png";
		t.width = 18;
		t.x = 185.04;
		t.y = 296;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_age_png";
		t.width = 65;
		t.x = 26.68;
		t.y = 203.01;
		return t;
	};
	_proto.life_time_i = function () {
		var t = new eui.Label();
		this.life_time = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "life_time";
		t.size = 18;
		t.text = "10 days";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 128.5;
		t.y = 203.01;
		return t;
	};
	_proto.horse_score_i = function () {
		var t = new eui.Label();
		this.horse_score = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 60;
		t.italic = true;
		t.name = "horse_score";
		t.size = 36;
		t.text = "666";
		t.textAlign = "center";
		t.textColor = 0xfcc00c;
		t.verticalAlign = "middle";
		t.width = 185;
		t.x = 85;
		t.y = 129;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_energy_png";
		t.width = 65;
		t.x = 29.5;
		t.y = 245;
		return t;
	};
	_proto.energy_text_i = function () {
		var t = new eui.Label();
		this.energy_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "energy_text";
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 243.33;
		t.y = 245;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_breeding-time_png";
		t.width = 91;
		t.x = 29.49;
		t.y = 289.5;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 20;
		t.text = "4/6";
		t.textAlign = "center";
		t.textColor = 0xaf4f4f;
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 243.99;
		t.y = 291.5;
		return t;
	};
	_proto.energy_length_i = function () {
		var t = new eui.Image();
		this.energy_length = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.name = "energy_length";
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 106.55;
		t.y = 252.98;
		return t;
	};
	_proto.energy_value_i = function () {
		var t = new eui.Image();
		this.energy_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.name = "energy_value";
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 106.55;
		t.y = 252.98;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_strength_png";
		t.width = 65;
		t.x = 32.16;
		t.y = 335.4;
		return t;
	};
	_proto.strength_text_i = function () {
		var t = new eui.Label();
		this.strength_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "strength_text";
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 245.99;
		t.y = 335.4;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 109.21;
		t.y = 343.38;
		return t;
	};
	_proto.strength_value_i = function () {
		var t = new eui.Image();
		this.strength_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.name = "strength_value";
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 109.21;
		t.y = 343.38;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_speed_png";
		t.width = 65;
		t.x = 32.61;
		t.y = 381.38;
		return t;
	};
	_proto.speed_text_i = function () {
		var t = new eui.Label();
		this.speed_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "speed_text";
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 246.44;
		t.y = 381.38;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 109.66;
		t.y = 389.36;
		return t;
	};
	_proto.speed_value_i = function () {
		var t = new eui.Image();
		this.speed_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.name = "speed_value";
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 109.66;
		t.y = 389.36;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_Decterous_png";
		t.width = 65;
		t.x = 33.49;
		t.y = 430.05;
		return t;
	};
	_proto.dexterity_text_i = function () {
		var t = new eui.Label();
		this.dexterity_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "dexterity_text";
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 247.32;
		t.y = 430.05;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 110.54;
		t.y = 438.03;
		return t;
	};
	_proto.dexterity_value_i = function () {
		var t = new eui.Image();
		this.dexterity_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.name = "dexterity_value";
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 110.54;
		t.y = 438.03;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_burst_png";
		t.width = 65;
		t.x = 32.61;
		t.y = 476.05;
		return t;
	};
	_proto.burst_text_i = function () {
		var t = new eui.Label();
		this.burst_text = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "burst_text";
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 246.44;
		t.y = 476.05;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 109.66;
		t.y = 484.03;
		return t;
	};
	_proto.burst_value_i = function () {
		var t = new eui.Image();
		this.burst_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.name = "burst_value";
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 109.66;
		t.y = 484.03;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 18;
		t.source = "icon_heart_png";
		t.width = 18;
		t.x = 204.54;
		t.y = 296;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.height = 18;
		t.source = "icon_heart_1_png";
		t.width = 18;
		t.x = 225.5;
		t.y = 296.5;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 18;
		t.source = "icon_heart_1_png";
		t.width = 18;
		t.x = 245.99;
		t.y = 296.5;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.height = 123;
		t.source = "bar_info_di2_png";
		t.visible = false;
		t.width = 348;
		t.x = 5.99;
		t.y = 512;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.source = "icon_Stamina_png";
		t.width = 44;
		t.x = 24;
		t.y = 528;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.source = "icon_start_png";
		t.width = 44;
		t.x = 112.66;
		t.y = 528;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.source = "icon_wisdom_png";
		t.width = 44;
		t.x = 203.04;
		t.y = 528;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.height = 41;
		t.source = "icon_constitution_png";
		t.width = 44;
		t.x = 292.32;
		t.y = 528;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.height = 2;
		t.source = "bar_Splitline_1_png";
		t.width = 346;
		t.x = 2;
		t.y = 581;
		return t;
	};
	_proto.stamina_value_i = function () {
		var t = new eui.Label();
		this.stamina_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "stamina_value";
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 15.02;
		t.y = 594.84;
		return t;
	};
	_proto.wisdom_value_i = function () {
		var t = new eui.Label();
		this.wisdom_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "wisdom_value";
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 193.62;
		t.y = 594.84;
		return t;
	};
	_proto.start_value_i = function () {
		var t = new eui.Label();
		this.start_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "start_value";
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.textColor = 0x18a4db;
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 102.52;
		t.y = 594.84;
		return t;
	};
	_proto.constitution_value_i = function () {
		var t = new eui.Label();
		this.constitution_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "constitution_value";
		t.size = 18;
		t.text = "80";
		t.textAlign = "center";
		t.textColor = 0x18A4DB;
		t.verticalAlign = "middle";
		t.width = 59.03;
		t.x = 280.87;
		t.y = 593.32;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 115;
		t.source = "bar_info_di2_png";
		t.width = 349;
		t.x = 5;
		t.y = 512;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "rightbar_s_png";
		t.width = 59;
		t.x = 360;
		t.y = 213;
		return t;
	};
	_proto.horse_stat_lb_i = function () {
		var t = new eui.Image();
		this.horse_stat_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "horse_stat_lb";
		t.source = "icon_stats_s_png";
		t.width = 59;
		t.x = 360;
		t.y = 213;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "rightbar_s_png";
		t.visible = false;
		t.width = 59;
		t.x = 360;
		t.y = 312;
		return t;
	};
	_proto.horse_skill_lb_i = function () {
		var t = new eui.Image();
		this.horse_skill_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "horse_skill_lb";
		t.source = "icon_skill_n_png";
		t.width = 59;
		t.x = 360;
		t.y = 312;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.source = "rightbar_s_png";
		t.visible = false;
		t.width = 59;
		t.x = 360;
		t.y = 412;
		return t;
	};
	_proto.horse_pedigree_lb_i = function () {
		var t = new eui.Image();
		this.horse_pedigree_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 94;
		t.name = "horse_pedigree_lb";
		t.source = "icon_pedigree_n_png";
		t.width = 59;
		t.x = 360;
		t.y = 412;
		return t;
	};
	_proto.question_i = function () {
		var t = new eui.Image();
		this.question = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.name = "question";
		t.source = "sign_2_png";
		t.width = 28;
		t.x = 300;
		t.y = 147;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/TipsPanelUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin116 = 	(function (_super) {
		__extends(LoginUI$Skin116, _super);
		function LoginUI$Skin116() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_close_blue_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin116.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_close_blue_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin116;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","tip_title","tip_content","t_g","t_s","fighting_parent","btn_close"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_parent_i(),this.btn_close_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_parent_i = function () {
		var t = new eui.Group();
		this.fighting_parent = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 738;
		t.name = "fighting_parent";
		t.width = 1077;
		t.x = 101.23;
		t.y = 6;
		t.elementsContent = [this.fighting_platform_i(),this.tip_title_i(),this.t_s_i()];
		return t;
	};
	_proto.fighting_platform_i = function () {
		var t = new eui.Image();
		this.fighting_platform = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 471.57;
		t.name = "fighting_platform";
		t.scale9Grid = new egret.Rectangle(4,64,171,113);
		t.source = "main_setting_bg_png";
		t.width = 732;
		t.x = 185.44;
		t.y = 103.73;
		return t;
	};
	_proto.tip_title_i = function () {
		var t = new eui.Label();
		this.tip_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.name = "tip_title";
		t.size = 36;
		t.text = "技能";
		t.textAlign = "center";
		t.textColor = 0x404e73;
		t.verticalAlign = "middle";
		t.width = 396;
		t.x = 349.44;
		t.y = 120.62;
		return t;
	};
	_proto.t_s_i = function () {
		var t = new eui.Scroller();
		this.t_s = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 392.42;
		t.name = "t_s";
		t.width = 669.7;
		t.x = 217;
		t.y = 171;
		t.viewport = this.t_g_i();
		return t;
	};
	_proto.t_g_i = function () {
		var t = new eui.Group();
		this.t_g = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 400;
		t.name = "t_g";
		t.width = 657.58;
		t.elementsContent = [this.tip_content_i()];
		return t;
	};
	_proto.tip_content_i = function () {
		var t = new eui.Label();
		this.tip_content = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 1080;
		t.lineSpacing = 10;
		t.name = "tip_content";
		t.scaleX = 1;
		t.scaleY = 1;
		t.size = 24;
		t.text = "";
		t.textAlign = "left";
		t.textColor = 0x5a71d1;
		t.verticalAlign = "top";
		t.width = 652.85;
		t.x = 12.58;
		t.y = 42.08;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 32;
		t.anchorOffsetY = 34;
		t.height = 70.66;
		t.label = "";
		t.name = "btn_close";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 64.67;
		t.x = 1008.18;
		t.y = 112.96;
		t.skinName = LoginUI$Skin116;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Training_left.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["training_img_03","training_img_02","training_img_04","training_img_01","training_img_05","btn_back_img"];
		
		this.height = 738;
		this.width = 330;
		this.elementsContent = [this._Image1_i(),this.training_img_03_i(),this.training_img_02_i(),this.training_img_04_i(),this.training_img_01_i(),this.training_img_05_i(),this.btn_back_img_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.height = 630;
		t.source = "leftbar_2_di_png";
		t.width = 144;
		t.x = -5;
		t.y = 0;
		return t;
	};
	_proto.training_img_03_i = function () {
		var t = new eui.Image();
		this.training_img_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 141;
		t.name = "training_img_03";
		t.source = "btn_TNGOBS_S_png";
		t.width = 291;
		t.x = 43.5;
		t.y = 260.1;
		return t;
	};
	_proto.training_img_02_i = function () {
		var t = new eui.Image();
		this.training_img_02 = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 141;
		t.name = "training_img_02";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "btn_TNGFR_png";
		t.width = 291;
		t.x = 19;
		t.y = 133.2;
		return t;
	};
	_proto.training_img_04_i = function () {
		var t = new eui.Image();
		this.training_img_04 = t;
		t.alpha = 0.7;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 141;
		t.name = "training_img_04";
		t.scaleX = 0.9;
		t.scaleY = 0.9;
		t.source = "btn_TNGtrot_png";
		t.width = 291;
		t.x = 33.5;
		t.y = 401.1;
		return t;
	};
	_proto.training_img_01_i = function () {
		var t = new eui.Image();
		this.training_img_01 = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 141;
		t.name = "training_img_01";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btn_TNGP_png";
		t.width = 291;
		t.x = -5;
		t.y = 30.5;
		return t;
	};
	_proto.training_img_05_i = function () {
		var t = new eui.Image();
		this.training_img_05 = t;
		t.alpha = 0.5;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 141;
		t.name = "training_img_05";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btn_TNGC_png";
		t.width = 291;
		t.x = 0;
		t.y = 517.2;
		return t;
	};
	_proto.btn_back_img_i = function () {
		var t = new eui.Image();
		this.btn_back_img = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.name = "btn_back_img";
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "btn_back_png";
		t.width = 102;
		t.x = 0;
		t.y = 646.2;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Training_middle.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["img_head_bg0","horse_lv_img","horse_name_lb","stallion_flag_img"];
		
		this.height = 635;
		this.width = 709;
		this.elementsContent = [this.img_head_bg0_i(),this._Image1_i(),this._Image2_i(),this.horse_lv_img_i(),this._Image3_i(),this.horse_name_lb_i(),this.stallion_flag_img_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Label1_i(),this._Image9_i(),this._Label2_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Label3_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Label4_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Label5_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Label6_i(),this._Image22_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.img_head_bg0_i = function () {
		var t = new eui.Image();
		this.img_head_bg0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 63;
		t.name = "img_head_bg";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "icon_level_png";
		t.width = 48;
		t.x = 32.76;
		t.y = 85.02;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 286.67;
		t.source = "bar_info_di_14_png";
		t.width = 610.67;
		t.x = 37.33;
		t.y = 260.33;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 286.67;
		t.rotation = 180;
		t.source = "bar_info_di_14_png";
		t.width = 614.67;
		t.x = 650.03;
		t.y = 576.03;
		return t;
	};
	_proto.horse_lv_img_i = function () {
		var t = new eui.Image();
		this.horse_lv_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 30.52;
		t.name = "horse_lv_img";
		t.source = "icon_level_d_png";
		t.width = 22.62;
		t.x = 45.47;
		t.y = 93.63;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 93;
		t.source = "bar_name_di_png";
		t.width = 322;
		t.x = 34.36;
		t.y = 82.93;
		return t;
	};
	_proto.horse_name_lb_i = function () {
		var t = new eui.Label();
		this.horse_name_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 71;
		t.name = "horse_name_lb";
		t.size = 32;
		t.strokeColor = 0xC63B3B;
		t.text = "Ferrari";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 238.24;
		t.x = 78.96;
		t.y = 68.95;
		return t;
	};
	_proto.stallion_flag_img_i = function () {
		var t = new eui.Image();
		this.stallion_flag_img = t;
		t.height = 46;
		t.name = "stallion_flag_img";
		t.source = "icon_Male_png";
		t.width = 37;
		t.x = 310.35;
		t.y = 92.39;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.source = "icon_stars2_png";
		t.width = 34;
		t.x = 101.08;
		t.y = 129.43;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.source = "icon_stars2_png";
		t.width = 34;
		t.x = 135.08;
		t.y = 129.43;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.source = "icon_stars2_png";
		t.width = 34;
		t.x = 169.08;
		t.y = 129.43;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.source = "icon_stars2_png";
		t.width = 34;
		t.x = 203.08;
		t.y = 129.43;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.source = "icon_stars2_png";
		t.width = 34;
		t.x = 237.08;
		t.y = 129.43;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 45;
		t.italic = true;
		t.size = 36;
		t.text = "666";
		t.textAlign = "center";
		t.textColor = 0xFCC00C;
		t.verticalAlign = "middle";
		t.width = 185;
		t.x = 262;
		t.y = 280.48;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_energy_png";
		t.width = 65;
		t.x = 199.7;
		t.y = 317.5;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 413.53;
		t.y = 317.5;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 276.75;
		t.y = 325.48;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 276.75;
		t.y = 325.48;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_strength_png";
		t.width = 65;
		t.x = 44.58;
		t.y = 372.4;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 258.41;
		t.y = 372.4;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 121.63;
		t.y = 380.38;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 121.63;
		t.y = 380.38;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_speed_png";
		t.width = 65;
		t.x = 45.03;
		t.y = 418.38;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 258.86;
		t.y = 418.38;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 122.08;
		t.y = 426.36;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 122.08;
		t.y = 426.36;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_Decterous_png";
		t.width = 65;
		t.x = 368.03;
		t.y = 372.4;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 581.86;
		t.y = 372.4;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 445.08;
		t.y = 380.38;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 445.08;
		t.y = 380.38;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_burst_png";
		t.width = 65;
		t.x = 367.15;
		t.y = 418.4;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 580.98;
		t.y = 418.4;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 444.2;
		t.y = 426.38;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 444.2;
		t.y = 426.38;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 150.53;
		t.y = 474.18;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "bar_exp_2_png";
		t.width = 110;
		t.x = 150.53;
		t.y = 473.18;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_Grassland_png";
		t.width = 60;
		t.x = 107.78;
		t.y = 461.18;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_level_a_png";
		t.width = 42;
		t.x = 239.13;
		t.y = 466.18;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 323.7;
		t.y = 474.18;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "bar_exp_2_png";
		t.width = 110;
		t.x = 323.7;
		t.y = 473.18;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_sand_png";
		t.width = 60;
		t.x = 280.95;
		t.y = 461.18;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_level_a_png";
		t.width = 42;
		t.x = 412.3;
		t.y = 466.18;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 495.08;
		t.y = 474.18;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "bar_exp_2_png";
		t.width = 110;
		t.x = 495.08;
		t.y = 473.18;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_Mud_png";
		t.width = 60;
		t.x = 452.33;
		t.y = 461.18;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.scaleX = 0.5;
		t.scaleY = 0.5;
		t.source = "icon_level_a_png";
		t.width = 42;
		t.x = 583.68;
		t.y = 466.18;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Training_right.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	var NoticeGroup$Skin117 = 	(function (_super) {
		__extends(NoticeGroup$Skin117, _super);
		function NoticeGroup$Skin117() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin117.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin117;
	})(eui.Skin);

	var NoticeGroup$Skin118 = 	(function (_super) {
		__extends(NoticeGroup$Skin118, _super);
		function NoticeGroup$Skin118() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = NoticeGroup$Skin118.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "icon_coin2_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return NoticeGroup$Skin118;
	})(eui.Skin);

	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["btn_shop0","main_coin_num_lb","btn_shop1","main_coin_num_lb0","train_btn_img"];
		
		this.height = 635;
		this.width = 433;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Image7_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this.btn_shop0_i(),this.main_coin_num_lb_i(),this.btn_shop1_i(),this.main_coin_num_lb0_i(),this.train_btn_img_i(),this._Label1_i(),this._Image21_i(),this._Image22_i(),this._Label2_i(),this._Image23_i(),this._Image24_i(),this._Image25_i(),this._Image26_i(),this._Image27_i(),this._Image28_i(),this._Image29_i(),this._Image30_i(),this._Image31_i(),this._Image32_i(),this._Image33_i(),this._Image34_i(),this._Image35_i(),this._Image36_i(),this._Image37_i(),this._Image38_i(),this._Image39_i(),this._Image40_i(),this._Image41_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 629;
		t.source = "bar_info_di1_png";
		t.width = 424;
		t.x = 5;
		t.y = 6.4;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.source = "select3_s_png";
		t.width = 67;
		t.x = 38;
		t.y = 407.68;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "icon_Grassland_png";
		t.width = 60;
		t.x = 41.6;
		t.y = 413.18;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.source = "select3_s_png";
		t.visible = false;
		t.width = 67;
		t.x = 332;
		t.y = 407.68;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 61;
		t.source = "select3_s_png";
		t.visible = false;
		t.width = 67;
		t.x = 184;
		t.y = 407.68;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "icon_sand_png";
		t.width = 60;
		t.x = 188.3;
		t.y = 412.78;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 27;
		t.source = "bar_info_di_15_png";
		t.width = 93;
		t.x = 26;
		t.y = 76.78;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 20;
		t.source = "icon_energy_png";
		t.width = 60;
		t.x = 38;
		t.y = 80.98;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.source = "bar_info_+_png";
		t.width = 76;
		t.x = 27;
		t.y = 128.98;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "Total_png";
		t.width = 82;
		t.x = 99;
		t.y = 133.48;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "btn_+_2_png";
		t.width = 23;
		t.x = 296;
		t.y = 197.38;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "btn_-_2_png";
		t.width = 23;
		t.x = 329.5;
		t.y = 197.38;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.source = "btn_info3_png";
		t.width = 202;
		t.x = 117;
		t.y = 543;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "Train_png";
		t.width = 202;
		t.x = 117.3;
		t.y = 554;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "icon_Mud_png";
		t.width = 60;
		t.x = 336.5;
		t.y = 413.18;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 63;
		t.source = "bar_info_di_3_png";
		t.width = 430;
		t.x = 3;
		t.y = 341;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 63;
		t.source = "bar_info_di_3_png";
		t.width = 430;
		t.x = 0;
		t.y = 5.5;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 63;
		t.source = "Site_png";
		t.width = 426;
		t.x = 4;
		t.y = 341;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.height = 63;
		t.source = "Effect_png";
		t.width = 362;
		t.x = 27;
		t.y = 5.5;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23;
		t.source = "bar_info_di_16_png";
		t.width = 181;
		t.x = 127.5;
		t.y = 585;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 146.29;
		t.y = 585.35;
		t.skinName = NoticeGroup$Skin117;
		return t;
	};
	_proto.main_coin_num_lb_i = function () {
		var t = new eui.Label();
		this.main_coin_num_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "main_coin_num_lb";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.size = 26;
		t.text = "1";
		t.textAlign = "left";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 171.09;
		t.y = 590;
		return t;
	};
	_proto.btn_shop1_i = function () {
		var t = new eui.Button();
		this.btn_shop1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41;
		t.label = "";
		t.name = "btn_shop3";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.width = 39;
		t.x = 233.91;
		t.y = 585.87;
		t.skinName = NoticeGroup$Skin118;
		return t;
	};
	_proto.main_coin_num_lb0_i = function () {
		var t = new eui.Label();
		this.main_coin_num_lb0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 23.33;
		t.name = "main_coin_num_lb";
		t.scaleX = 0.6;
		t.scaleY = 0.6;
		t.size = 26;
		t.text = "2";
		t.textAlign = "left";
		t.textColor = 0xF9F2F2;
		t.verticalAlign = "middle";
		t.width = 74;
		t.x = 259.48;
		t.y = 590;
		return t;
	};
	_proto.train_btn_img_i = function () {
		var t = new eui.Label();
		this.train_btn_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 96;
		t.name = "train_btn_img";
		t.text = "";
		t.width = 242;
		t.x = 101.6;
		t.y = 537;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.size = 18;
		t.text = "xx f   x training has a xx% probability \nto double the growth of training results";
		t.width = 306;
		t.x = 60.5;
		t.y = 483;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.height = 24;
		t.source = "bar_exp_3_red_png";
		t.width = 177;
		t.x = 131.5;
		t.y = 80.98;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.height = 24;
		t.source = "bar_exp_3_png";
		t.width = 123.5;
		t.x = 131.5;
		t.y = 80.58;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.size = 22;
		t.text = "4";
		t.x = 202;
		t.y = 136.48;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "bar_exp_4_di_png";
		t.width = 174;
		t.x = 130.91;
		t.y = 297.4;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_strength_png";
		t.width = 65;
		t.x = 41;
		t.y = 197.38;
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "bar_exp_4_di_png";
		t.width = 174;
		t.x = 131.5;
		t.y = 202.18;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "btn_+_2_png";
		t.width = 23;
		t.x = 297;
		t.y = 227.22;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "bar_exp_4_png";
		t.width = 174;
		t.x = 131.5;
		t.y = 297.4;
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "btn_-_2_png";
		t.width = 23;
		t.x = 329.5;
		t.y = 227.22;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "bar_exp_4_di_png";
		t.width = 174;
		t.x = 130.5;
		t.y = 232.62;
		return t;
	};
	_proto._Image30_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_speed_png";
		t.width = 65;
		t.x = 41.45;
		t.y = 231.36;
		return t;
	};
	_proto._Image31_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_Decterous_png";
		t.width = 65;
		t.x = 42;
		t.y = 262.03;
		return t;
	};
	_proto._Image32_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_burst_png";
		t.width = 65;
		t.x = 42;
		t.y = 293.4;
		return t;
	};
	_proto._Image33_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "btn_+_2_png";
		t.width = 23;
		t.x = 297.01;
		t.y = 260.11;
		return t;
	};
	_proto._Image34_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "btn_-_2_png";
		t.width = 23;
		t.x = 329.51;
		t.y = 260.11;
		return t;
	};
	_proto._Image35_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "bar_exp_4_di_png";
		t.width = 174;
		t.x = 130.51;
		t.y = 265.51;
		return t;
	};
	_proto._Image36_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "btn_+_2_png";
		t.width = 23;
		t.x = 297.41;
		t.y = 292;
		return t;
	};
	_proto._Image37_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 24;
		t.source = "btn_-_2_png";
		t.width = 23;
		t.x = 329.91;
		t.y = 292;
		return t;
	};
	_proto._Image38_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "single_green_png";
		t.width = 50;
		t.x = 130.49;
		t.y = 200.98;
		return t;
	};
	_proto._Image39_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "bar_exp_4_png";
		t.width = 174;
		t.x = 129.69;
		t.y = 233.76;
		return t;
	};
	_proto._Image40_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "bar_exp_4_png";
		t.width = 174;
		t.x = 130.49;
		t.y = 265.51;
		return t;
	};
	_proto._Image41_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 19;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "single_green_png";
		t.width = 50;
		t.x = 164.8;
		t.y = 200.98;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/Training_success.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["merge_fail_icon0","merge_fail_icon","merge_fail_title_img","merge_lv_img","merge_success_title_img","merge_fail_confirm","merge_fail_confirm0"];
		
		this.height = 755;
		this.width = 998.97;
		this.elementsContent = [this.merge_fail_icon0_i(),this.merge_fail_icon_i(),this.merge_fail_title_img_i(),this.merge_lv_img_i(),this.merge_success_title_img_i(),this._Image1_i(),this.merge_fail_confirm_i(),this.merge_fail_confirm0_i(),this._Image2_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Label4_i(),this._Image7_i(),this._Label5_i(),this._Image8_i(),this._Image9_i(),this._Image10_i(),this._Label6_i(),this._Image11_i(),this._Image12_i(),this._Image13_i(),this._Label7_i(),this._Image14_i(),this._Image15_i(),this._Image16_i(),this._Label8_i(),this._Image17_i(),this._Image18_i(),this._Image19_i(),this._Image20_i(),this._Image21_i(),this._Image22_i(),this._Label9_i(),this._Label10_i(),this._Label11_i(),this._Label12_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.merge_fail_icon0_i = function () {
		var t = new eui.Image();
		this.merge_fail_icon0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 364;
		t.name = "merge_fail_icon";
		t.source = "pic_light_png";
		t.width = 395;
		t.x = 3.5;
		t.y = 164;
		return t;
	};
	_proto.merge_fail_icon_i = function () {
		var t = new eui.Image();
		this.merge_fail_icon = t;
		t.anchorOffsetX = 0;
		t.height = 287;
		t.name = "merge_fail_icon";
		t.skewY = -180;
		t.source = "stand_horse_png";
		t.width = 379;
		t.x = 398.5;
		t.y = 217.5;
		return t;
	};
	_proto.merge_fail_title_img_i = function () {
		var t = new eui.Image();
		this.merge_fail_title_img = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.name = "merge_fail_title_img";
		t.source = "pic_complete_png";
		t.width = 304;
		t.x = 340.33;
		t.y = 51.66;
		return t;
	};
	_proto.merge_lv_img_i = function () {
		var t = new eui.Image();
		this.merge_lv_img = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.name = "merge_lv_img";
		t.source = "icon_level_s_png";
		t.width = 61;
		t.x = 172.5;
		t.y = 199;
		return t;
	};
	_proto.merge_success_title_img_i = function () {
		var t = new eui.Image();
		this.merge_success_title_img = t;
		t.alpha = 1;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55;
		t.name = "merge_success_title_img";
		t.source = "pic_training_png";
		t.width = 181;
		t.x = 398.5;
		t.y = 109;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 58;
		t.source = "btn_info1_png";
		t.width = 147;
		t.x = 413.9;
		t.y = 658.76;
		return t;
	};
	_proto.merge_fail_confirm_i = function () {
		var t = new eui.Image();
		this.merge_fail_confirm = t;
		t.height = 28;
		t.name = "merge_fail_confirm";
		t.source = "icon_confirm_png";
		t.width = 123;
		t.x = 424.9;
		t.y = 671.76;
		return t;
	};
	_proto.merge_fail_confirm0_i = function () {
		var t = new eui.Image();
		this.merge_fail_confirm0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.name = "merge_fail_confirm";
		t.source = "bar_name_di2_png";
		t.width = 229.67;
		t.x = 89.66;
		t.y = 559.34;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_stars2_png";
		t.width = 38;
		t.x = 97.17;
		t.y = 504.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_stars2_png";
		t.width = 38;
		t.x = 141.67;
		t.y = 504.5;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_stars2_png";
		t.width = 38;
		t.x = 183.17;
		t.y = 504.5;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_stars2_png";
		t.width = 38;
		t.x = 226.17;
		t.y = 504.5;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40;
		t.source = "icon_stars2_png";
		t.width = 38;
		t.x = 268.17;
		t.y = 503.7;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 43.33;
		t.text = "Echo Rambo";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 240.67;
		t.x = 82.5;
		t.y = 556.68;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 45;
		t.italic = true;
		t.size = 36;
		t.text = "666";
		t.textAlign = "center";
		t.textColor = 0xFCC00C;
		t.verticalAlign = "middle";
		t.width = 185;
		t.x = 610.2;
		t.y = 232.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 45;
		t.italic = true;
		t.size = 36;
		t.text = "+ 5";
		t.textAlign = "center";
		t.textColor = 0x2cf90c;
		t.verticalAlign = "middle";
		t.width = 185;
		t.x = 813.97;
		t.y = 232.5;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 45;
		t.italic = true;
		t.size = 36;
		t.text = "+ 5";
		t.textAlign = "center";
		t.textColor = 0x2CF90C;
		t.verticalAlign = "middle";
		t.width = 185;
		t.x = 813.97;
		t.y = 291.67;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_strength_png";
		t.width = 65;
		t.x = 533.15;
		t.y = 301.19;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 746.98;
		t.y = 301.19;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 610.2;
		t.y = 309.17;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 610.2;
		t.y = 309.17;
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_speed_png";
		t.width = 65;
		t.x = 534.03;
		t.y = 344.02;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 747.86;
		t.y = 344.02;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 611.08;
		t.y = 352;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 611.08;
		t.y = 352;
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_Decterous_png";
		t.width = 65;
		t.x = 534.03;
		t.y = 387.4;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 747.86;
		t.y = 387.4;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 611.08;
		t.y = 395.38;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 611.08;
		t.y = 395.38;
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.source = "icon_burst_png";
		t.width = 65;
		t.x = 533.15;
		t.y = 433.4;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 25;
		t.size = 18;
		t.text = "80/100";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 106;
		t.x = 746.98;
		t.y = 433.4;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 610.2;
		t.y = 441.38;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 9;
		t.source = "bar_exp_1_png";
		t.width = 110;
		t.x = 610.2;
		t.y = 441.38;
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 10;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "bar_exp_1_di_png";
		t.width = 150.66;
		t.x = 611.08;
		t.y = 500;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 11;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "bar_exp_2_png";
		t.width = 110;
		t.x = 611.08;
		t.y = 499;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_Grassland_png";
		t.width = 60;
		t.x = 534.9;
		t.y = 484;
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.scaleX = 0.8;
		t.scaleY = 0.8;
		t.source = "icon_level_a_png";
		t.width = 42;
		t.x = 777.73;
		t.y = 488.5;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 45;
		t.italic = true;
		t.size = 36;
		t.text = "+ 5";
		t.textAlign = "center";
		t.textColor = 0x2CF90C;
		t.verticalAlign = "middle";
		t.width = 185;
		t.x = 813.97;
		t.y = 334.5;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 45;
		t.italic = true;
		t.size = 36;
		t.text = "+ 5";
		t.textAlign = "center";
		t.textColor = 0x2CF90C;
		t.verticalAlign = "middle";
		t.width = 185;
		t.x = 813.97;
		t.y = 377.38;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 45;
		t.italic = true;
		t.size = 36;
		t.text = "+ 5";
		t.textAlign = "center";
		t.textColor = 0x2CF90C;
		t.verticalAlign = "middle";
		t.width = 185;
		t.x = 813.97;
		t.y = 418.88;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Arial";
		t.height = 45;
		t.italic = true;
		t.size = 36;
		t.text = "+ 5";
		t.textAlign = "center";
		t.textColor = 0x2CF90C;
		t.verticalAlign = "middle";
		t.width = 185;
		t.x = 813.97;
		t.y = 478.7;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/ViewHistoryPass.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin119 = 	(function (_super) {
		__extends(LoginUI$Skin119, _super);
		function LoginUI$Skin119() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_close_blue_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin119.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_close_blue_01_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin119;
	})(eui.Skin);

	var LoginUI$Skin120 = 	(function (_super) {
		__extends(LoginUI$Skin120, _super);
		function LoginUI$Skin120() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_type2_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin120.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_type1_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin120;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_close","star_01","star_02","star_03","win_title_img","view_barr_title","info_1","info_2","info_3","start_btn"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.btn_close_i(),this._Button1_i(),this.star_01_i(),this.star_02_i(),this.star_03_i(),this.win_title_img_i(),this._Label1_i(),this.view_barr_title_i(),this._Label2_i(),this.info_1_i(),this._Image2_i(),this._Label3_i(),this.info_2_i(),this._Image3_i(),this._Label4_i(),this.info_3_i(),this._Image4_i(),this.start_btn_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 453.91;
		t.source = "view_history_bg_png";
		t.width = 751.3;
		t.x = 295.35;
		t.y = 172.16;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 40;
		t.anchorOffsetY = 40;
		t.height = 80;
		t.label = "";
		t.name = "btn_close";
		t.width = 80;
		t.x = 1028.49;
		t.y = 185.49;
		t.skinName = LoginUI$Skin119;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.label = "";
		t.width = 170;
		t.x = 855.3;
		t.y = 540;
		t.skinName = LoginUI$Skin120;
		return t;
	};
	_proto.star_01_i = function () {
		var t = new eui.Image();
		this.star_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 185;
		t.name = "star_01";
		t.source = "start_02_png";
		t.width = 154;
		t.x = 442.34;
		t.y = 235.16;
		return t;
	};
	_proto.star_02_i = function () {
		var t = new eui.Image();
		this.star_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 185;
		t.name = "star_02";
		t.source = "start_02_png";
		t.width = 154;
		t.x = 602.3;
		t.y = 281.08;
		return t;
	};
	_proto.star_03_i = function () {
		var t = new eui.Image();
		this.star_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 185;
		t.name = "star_03";
		t.source = "start_02_png";
		t.width = 154;
		t.x = 756.3;
		t.y = 235.16;
		return t;
	};
	_proto.win_title_img_i = function () {
		var t = new eui.Image();
		this.win_title_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85;
		t.name = "win_title_img";
		t.source = "view_history_title_png";
		t.width = 382;
		t.x = 490.64;
		t.y = 102.06;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 32;
		t.text = "历史战绩";
		t.textColor = 0x6581d7;
		t.x = 615.3;
		t.y = 203.16;
		return t;
	};
	_proto.view_barr_title_i = function () {
		var t = new eui.Label();
		this.view_barr_title = t;
		t.name = "view_barr_title";
		t.size = 32;
		t.stroke = 3;
		t.strokeColor = 0x6371b2;
		t.text = "第 01 关";
		t.textAlign = "center";
		t.textColor = 0xfffef6;
		t.verticalAlign = "middle";
		t.x = 621.3;
		t.y = 129.49;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.size = 22;
		t.text = "平均胜率：";
		t.textAlign = "left";
		t.textColor = 0x5ac4fb;
		t.verticalAlign = "middle";
		t.width = 136;
		t.x = 362.34;
		t.y = 466;
		return t;
	};
	_proto.info_1_i = function () {
		var t = new eui.Label();
		this.info_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.name = "info_1";
		t.size = 22;
		t.text = "100%";
		t.textAlign = "left";
		t.textColor = 0xfefcfe;
		t.verticalAlign = "middle";
		t.width = 118;
		t.x = 468.34;
		t.y = 466;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "blue_star_png";
		t.width = 21;
		t.x = 336.5;
		t.y = 471.5;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.size = 22;
		t.text = "我的最佳通关时间：";
		t.textColor = 0x5AC4FB;
		t.verticalAlign = "middle";
		t.width = 208;
		t.x = 364.34;
		t.y = 503;
		return t;
	};
	_proto.info_2_i = function () {
		var t = new eui.Label();
		this.info_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.name = "info_2";
		t.size = 22;
		t.text = "10.12s";
		t.textAlign = "left";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.width = 160;
		t.x = 558.3;
		t.y = 504;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "blue_star_png";
		t.width = 21;
		t.x = 336.5;
		t.y = 507;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.size = 22;
		t.text = "全服最佳玩家：";
		t.textAlign = "left";
		t.textColor = 0x5AC4FB;
		t.verticalAlign = "middle";
		t.width = 166;
		t.x = 362.34;
		t.y = 541;
		return t;
	};
	_proto.info_3_i = function () {
		var t = new eui.Label();
		this.info_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.name = "info_3";
		t.size = 22;
		t.text = "小猪佩奇 10.12s";
		t.textAlign = "left";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.width = 286;
		t.x = 513.3;
		t.y = 541;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 21;
		t.source = "blue_star_png";
		t.width = 21;
		t.x = 336.5;
		t.y = 544;
		return t;
	};
	_proto.start_btn_i = function () {
		var t = new eui.Label();
		this.start_btn = t;
		t.anchorOffsetX = 82;
		t.anchorOffsetY = 32;
		t.height = 60;
		t.name = "start_btn";
		t.size = 26;
		t.stroke = 3;
		t.strokeColor = 0xf47b33;
		t.text = "开始挑战";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 166;
		t.x = 938;
		t.y = 574;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/WxVsWaitUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin121 = 	(function (_super) {
		__extends(LoginUI$Skin121, _super);
		function LoginUI$Skin121() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin121.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_head";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin121;
	})(eui.Skin);

	var LoginUI$Skin122 = 	(function (_super) {
		__extends(LoginUI$Skin122, _super);
		function LoginUI$Skin122() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin122.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "mini_head";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin122;
	})(eui.Skin);

	var LoginUI$Skin123 = 	(function (_super) {
		__extends(LoginUI$Skin123, _super);
		function LoginUI$Skin123() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin123.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			t.percentHeight = 100;
			t.source = "btn_back_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin123;
	})(eui.Skin);

	var LoginUI$Skin124 = 	(function (_super) {
		__extends(LoginUI$Skin124, _super);
		function LoginUI$Skin124() {
			_super.call(this);
			this.skinParts = ["labelDisplay"];
			
			this.elementsContent = [this._Image1_i(),this.labelDisplay_i()];
			this.states = [
				new eui.State ("up",
					[
					])
				,
				new eui.State ("down",
					[
						new eui.SetProperty("_Image1","source","btn_type2_2_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin124.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "btn_type1_1_png";
			t.percentWidth = 100;
			return t;
		};
		_proto.labelDisplay_i = function () {
			var t = new eui.Label();
			this.labelDisplay = t;
			t.horizontalCenter = 0;
			t.verticalCenter = 0;
			return t;
		};
		return LoginUI$Skin124;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","btn_info","img_lefthead","btn_info0","img_righthead","left_name","left_lv","right_lv","btn_close_wx_vs","left_online","right_online","btn_start","right_name","img_wx_wenhao","left_ready","right_ready"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_platform_i(),this._Image1_i(),this.btn_info_i(),this.img_lefthead_i(),this.btn_info0_i(),this.img_righthead_i(),this.left_name_i(),this.left_lv_i(),this.right_lv_i(),this.btn_close_wx_vs_i(),this.left_online_i(),this.right_online_i(),this.btn_start_i(),this.right_name_i(),this.img_wx_wenhao_i(),this._Image2_i(),this._Image3_i(),this.left_ready_i(),this.right_ready_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_platform_i = function () {
		var t = new eui.Image();
		this.fighting_platform = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 712;
		t.name = "fighting_platform";
		t.scale9Grid = new egret.Rectangle(25,25,150,150);
		t.source = "vs_mask_1v1_png";
		t.width = 1332;
		t.x = 1.73;
		t.y = 54.82;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 405;
		t.source = "vs_head_1v1_png";
		t.width = 1325;
		t.x = 4.56;
		t.y = 151.5;
		return t;
	};
	_proto.btn_info_i = function () {
		var t = new eui.Button();
		this.btn_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "btn_info";
		t.width = 96;
		t.x = 269;
		t.y = 294;
		t.skinName = LoginUI$Skin121;
		return t;
	};
	_proto.img_lefthead_i = function () {
		var t = new eui.Image();
		this.img_lefthead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.82;
		t.name = "img_lefthead";
		t.source = "default_head_png";
		t.width = 73.27;
		t.x = 280.37;
		t.y = 304.59;
		return t;
	};
	_proto.btn_info0_i = function () {
		var t = new eui.Button();
		this.btn_info0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "btn_info";
		t.width = 96;
		t.x = 958.3;
		t.y = 294;
		t.skinName = LoginUI$Skin122;
		return t;
	};
	_proto.img_righthead_i = function () {
		var t = new eui.Image();
		this.img_righthead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.82;
		t.name = "img_righthead";
		t.source = "default_head_png";
		t.width = 73.27;
		t.x = 969.67;
		t.y = 304.59;
		return t;
	};
	_proto.left_name_i = function () {
		var t = new eui.Label();
		this.left_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "left_name";
		t.size = 36;
		t.strokeColor = 0x000000;
		t.text = "名字1";
		t.textAlign = "center";
		t.textColor = 0xfefcfe;
		t.width = 132;
		t.x = 255;
		t.y = 406.64;
		return t;
	};
	_proto.left_lv_i = function () {
		var t = new eui.Label();
		this.left_lv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "left_lv";
		t.size = 30;
		t.strokeColor = 0x000000;
		t.text = "Lv.10";
		t.textAlign = "center";
		t.textColor = 0xffb7ac;
		t.verticalAlign = "middle";
		t.width = 132;
		t.x = 252.88;
		t.y = 441.32;
		return t;
	};
	_proto.right_lv_i = function () {
		var t = new eui.Label();
		this.right_lv = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "right_lv";
		t.size = 30;
		t.strokeColor = 0x000000;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0x7bc3fb;
		t.verticalAlign = "middle";
		t.width = 132;
		t.x = 940.31;
		t.y = 441.32;
		return t;
	};
	_proto.btn_close_wx_vs_i = function () {
		var t = new eui.Button();
		this.btn_close_wx_vs = t;
		t.anchorOffsetX = 39;
		t.anchorOffsetY = 38;
		t.height = 82.91;
		t.label = "";
		t.name = "btn_close_wx_vs";
		t.width = 79.76;
		t.x = 77.26;
		t.y = 77.89;
		t.skinName = LoginUI$Skin123;
		return t;
	};
	_proto.left_online_i = function () {
		var t = new eui.Label();
		this.left_online = t;
		t.name = "left_online";
		t.size = 22;
		t.text = "在线";
		t.textColor = 0x7cef43;
		t.x = 176;
		t.y = 239;
		return t;
	};
	_proto.right_online_i = function () {
		var t = new eui.Label();
		this.right_online = t;
		t.name = "right_online";
		t.size = 22;
		t.text = "等待";
		t.textColor = 0x7cef43;
		t.x = 1101.98;
		t.y = 239;
		return t;
	};
	_proto.btn_start_i = function () {
		var t = new eui.Button();
		this.btn_start = t;
		t.anchorOffsetX = 82;
		t.anchorOffsetY = 36;
		t.height = 74;
		t.label = "开 始";
		t.name = "btn_start";
		t.width = 166;
		t.x = 665.29;
		t.y = 632.81;
		t.skinName = LoginUI$Skin124;
		return t;
	};
	_proto.right_name_i = function () {
		var t = new eui.Label();
		this.right_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "right_name";
		t.size = 36;
		t.text = "";
		t.textAlign = "center";
		t.textColor = 0xfefcfe;
		t.width = 132;
		t.x = 940.31;
		t.y = 406.64;
		return t;
	};
	_proto.img_wx_wenhao_i = function () {
		var t = new eui.Image();
		this.img_wx_wenhao = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 382.14;
		t.name = "img_wx_wenhao";
		t.scale9Grid = new egret.Rectangle(9,6,447,371);
		t.source = "vs_randon_1v1_png";
		t.width = 462.64;
		t.x = 434.97;
		t.y = 174.44;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41.33;
		t.source = "vs_kuang_1v1_png";
		t.width = 137.33;
		t.x = 244;
		t.y = 527.7;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 41.33;
		t.source = "vs_kuang_1v1_png";
		t.width = 137.33;
		t.x = 934.98;
		t.y = 535.83;
		return t;
	};
	_proto.left_ready_i = function () {
		var t = new eui.Label();
		this.left_ready = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.name = "left_ready";
		t.size = 28;
		t.text = "已准备";
		t.textAlign = "center";
		t.textColor = 0x46c7fc;
		t.verticalAlign = "middle";
		t.width = 110;
		t.x = 254.4;
		t.y = 532.37;
		return t;
	};
	_proto.right_ready_i = function () {
		var t = new eui.Label();
		this.right_ready = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32;
		t.name = "right_ready";
		t.size = 28;
		t.text = "等待";
		t.textAlign = "center";
		t.textColor = 0x46c7fc;
		t.verticalAlign = "middle";
		t.width = 110;
		t.x = 948.26;
		t.y = 540.58;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VScrollBarSkin.exml'] = window.skins.VScrollBarSkin = (function (_super) {
	__extends(VScrollBarSkin, _super);
	function VScrollBarSkin() {
		_super.call(this);
		this.skinParts = ["thumb"];
		
		this.minHeight = 20;
		this.minWidth = 8;
		this.elementsContent = [this.thumb_i()];
	}
	var _proto = VScrollBarSkin.prototype;

	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.height = 30;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(3,3,2,2);
		t.source = "roundthumb_png";
		t.width = 8;
		return t;
	};
	return VScrollBarSkin;
})(eui.Skin);generateEUI.paths['resource/eui_skins/VSliderSkin.exml'] = window.skins.VSliderSkin = (function (_super) {
	__extends(VSliderSkin, _super);
	function VSliderSkin() {
		_super.call(this);
		this.skinParts = ["track","thumb"];
		
		this.minHeight = 30;
		this.minWidth = 25;
		this.elementsContent = [this.track_i(),this.thumb_i()];
	}
	var _proto = VSliderSkin.prototype;

	_proto.track_i = function () {
		var t = new eui.Image();
		this.track = t;
		t.percentHeight = 100;
		t.horizontalCenter = 0;
		t.scale9Grid = new egret.Rectangle(1,1,4,4);
		t.source = "track_png";
		t.width = 7;
		return t;
	};
	_proto.thumb_i = function () {
		var t = new eui.Image();
		this.thumb = t;
		t.horizontalCenter = 0;
		t.source = "thumb_png";
		return t;
	};
	return VSliderSkin;
})(eui.Skin);