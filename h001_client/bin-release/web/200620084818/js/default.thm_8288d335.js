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
		this.skinParts = ["res_group","res_scroller","btn_fashion","t_shi","t_zhuang","btn_one_lb","btn_paopao","t_pao1","t_pao2","btn_two_lb","btn_texiao","t_te","t_xiao","btn_three_lb","btn_daoju","t_dao","t_ju","btn_four_lb","btn_close","shop_show_info","btn_buy","bg_gold","bg_diamond","btn_diamond","btn_gold","lb_gold","lb_diamond","shop_show_icon"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.res_scroller_i(),this.btn_fashion_i(),this.t_shi_i(),this.t_zhuang_i(),this.btn_one_lb_i(),this.btn_paopao_i(),this.t_pao1_i(),this.t_pao2_i(),this.btn_two_lb_i(),this.btn_texiao_i(),this.t_te_i(),this.t_xiao_i(),this.btn_three_lb_i(),this.btn_daoju_i(),this.t_dao_i(),this.t_ju_i(),this.btn_four_lb_i(),this.btn_close_i(),this._Image4_i(),this._Image5_i(),this.shop_show_info_i(),this.btn_buy_i(),this.bg_gold_i(),this.bg_diamond_i(),this.btn_diamond_i(),this.btn_gold_i(),this.lb_gold_i(),this.lb_diamond_i(),this.shop_show_icon_i()];
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
		t.scale9Grid = new egret.Rectangle(25,25,150,150);
		t.source = "fighting_kuang_png";
		t.width = 1165.82;
		t.x = 84.23;
		t.y = 88.93;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 553.33;
		t.scale9Grid = new egret.Rectangle(4,8,146,142);
		t.source = "normal_bg_1_png";
		t.width = 895.77;
		t.x = 306.23;
		t.y = 125.18;
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
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.91;
		t.label = "";
		t.name = "btn_close";
		t.width = 79.76;
		t.x = 1188.26;
		t.y = 73.22;
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
		t.name = "shop_show_info";
		t.size = 28;
		t.text = "商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述商品描述";
		t.textAlign = "center";
		t.textColor = 0x7479db;
		t.verticalAlign = "top";
		t.width = 252.8;
		t.x = 922.29;
		t.y = 399.78;
		return t;
	};
	_proto.btn_buy_i = function () {
		var t = new eui.Button();
		this.btn_buy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62.12;
		t.label = "使  用";
		t.name = "btn_buy";
		t.width = 183.33;
		t.x = 957.03;
		t.y = 591.61;
		t.skinName = LoginUI$Skin2;
		return t;
	};
	_proto.bg_gold_i = function () {
		var t = new eui.Image();
		this.bg_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "bg_gold";
		t.source = "mini_own";
		t.width = 160;
		t.x = 643.97;
		t.y = 18.69;
		return t;
	};
	_proto.bg_diamond_i = function () {
		var t = new eui.Image();
		this.bg_diamond = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "bg_diamond";
		t.source = "mini_own";
		t.width = 160;
		t.x = 920.68;
		t.y = 22.17;
		return t;
	};
	_proto.btn_diamond_i = function () {
		var t = new eui.Button();
		this.btn_diamond = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_diamond";
		t.width = 58;
		t.x = 881.68;
		t.y = 16.69;
		t.skinName = LoginUI$Skin3;
		return t;
	};
	_proto.btn_gold_i = function () {
		var t = new eui.Button();
		this.btn_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_gold";
		t.width = 58;
		t.x = 595.24;
		t.y = 13.22;
		t.skinName = LoginUI$Skin4;
		return t;
	};
	_proto.lb_gold_i = function () {
		var t = new eui.Label();
		this.lb_gold = t;
		t.name = "lb_gold";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 712.33;
		t.y = 27.17;
		return t;
	};
	_proto.lb_diamond_i = function () {
		var t = new eui.Label();
		this.lb_diamond = t;
		t.name = "lb_diamond";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 1000.68;
		t.y = 28.17;
		return t;
	};
	_proto.shop_show_icon_i = function () {
		var t = new eui.Image();
		this.shop_show_icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 195.76;
		t.name = "shop_show_icon";
		t.source = "mini_weili";
		t.width = 215.45;
		t.x = 938.29;
		t.y = 174.3;
		return t;
	};
	return LoginUI;
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
		t.source = "LoginTexture_json.Bg_ditu_png";
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
		t.textColor = 0xf4ebeb;
		t.verticalAlign = "middle";
		t.width = 357;
		t.x = 26;
		t.y = 14;
		return t;
	};
	return CommonTips;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/EditUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin5 = 	(function (_super) {
		__extends(LoginUI$Skin5, _super);
		function LoginUI$Skin5() {
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
		var _proto = LoginUI$Skin5.prototype;

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
		return LoginUI$Skin5;
	})(eui.Skin);

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
		return LoginUI$Skin6;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_close_edit","lb_edit_title","btn_confirm_modify","lb_desc","account_lb_txt"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_close_edit_i(),this.lb_edit_title_i(),this.btn_confirm_modify_i(),this.lb_desc_i(),this._Image3_i(),this.account_lb_txt_i()];
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
		t.source = "LoginTexture_json.Img_toubiao_png";
		t.width = 522;
		t.x = 407.61;
		t.y = 231.67;
		return t;
	};
	_proto.btn_close_edit_i = function () {
		var t = new eui.Button();
		this.btn_close_edit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.33;
		t.label = "";
		t.name = "btn_close_edit";
		t.width = 68.33;
		t.x = 895.45;
		t.y = 204.33;
		t.skinName = LoginUI$Skin5;
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
		t.y = 236.66;
		return t;
	};
	_proto.btn_confirm_modify_i = function () {
		var t = new eui.Button();
		this.btn_confirm_modify = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.label = "";
		t.name = "btn_confirm_modify";
		t.width = 102;
		t.x = 619.61;
		t.y = 429.17;
		t.skinName = LoginUI$Skin6;
		return t;
	};
	_proto.lb_desc_i = function () {
		var t = new eui.Label();
		this.lb_desc = t;
		t.name = "lb_desc";
		t.size = 30;
		t.text = "手机号码：";
		t.textColor = 0xEDE8DC;
		t.x = 466.64;
		t.y = 336.5;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.source = "LoginTexture_json.inputtxt_png";
		t.width = 249.33;
		t.x = 615.73;
		t.y = 330.83;
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
		t.x = 628.98;
		t.y = 337.84;
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
						new eui.SetProperty("_Image1","source","replay_02_png")
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
						new eui.SetProperty("_Image1","source","share_02_png")
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
						new eui.SetProperty("_Image1","source","backhall_02_png")
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
		return LoginUI$Skin10;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["win_title_img","replay_btn_guanka","share_btn","goback_btn","star_01","star_02","star_03","lb_guanka","gold_lb","gold_lb0","gold_add_img_01","gold_add_img_02","gold_add_img_03","exp_add_img_01","exp_add_img_02","exp_add_img_03"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Button1_i(),this.win_title_img_i(),this.replay_btn_guanka_i(),this.share_btn_i(),this.goback_btn_i(),this._Image2_i(),this.star_01_i(),this.star_02_i(),this.star_03_i(),this.lb_guanka_i(),this._Image3_i(),this.gold_lb_i(),this.gold_lb0_i(),this._Image4_i(),this._Image5_i(),this.gold_add_img_01_i(),this.gold_add_img_02_i(),this.gold_add_img_03_i(),this.exp_add_img_01_i(),this.exp_add_img_02_i(),this.exp_add_img_03_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 537;
		t.source = "fighting_result_png";
		t.width = 921;
		t.x = 199.5;
		t.y = 102.5;
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
		t.height = 198;
		t.name = "win_title_img";
		t.source = "win_png";
		t.width = 696;
		t.x = 324.34;
		t.y = -18.5;
		return t;
	};
	_proto.replay_btn_guanka_i = function () {
		var t = new eui.Button();
		this.replay_btn_guanka = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "replay_btn_guanka";
		t.width = 266;
		t.x = 209.34;
		t.y = 532;
		t.skinName = LoginUI$Skin8;
		return t;
	};
	_proto.share_btn_i = function () {
		var t = new eui.Button();
		this.share_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "share_btn";
		t.width = 266;
		t.x = 528;
		t.y = 532;
		t.skinName = LoginUI$Skin9;
		return t;
	};
	_proto.goback_btn_i = function () {
		var t = new eui.Button();
		this.goback_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "goback_btn";
		t.width = 266;
		t.x = 841.34;
		t.y = 532;
		t.skinName = LoginUI$Skin10;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62;
		t.source = "name_bg_png";
		t.width = 242;
		t.x = 539;
		t.y = 165.84;
		return t;
	};
	_proto.star_01_i = function () {
		var t = new eui.Image();
		this.star_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.name = "star_01";
		t.source = "start_02_png";
		t.width = 198;
		t.x = 354.34;
		t.y = 212;
		return t;
	};
	_proto.star_02_i = function () {
		var t = new eui.Image();
		this.star_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.name = "star_02";
		t.source = "start_02_png";
		t.width = 198;
		t.x = 565;
		t.y = 235.08;
		return t;
	};
	_proto.star_03_i = function () {
		var t = new eui.Image();
		this.star_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 200;
		t.name = "star_03";
		t.source = "start_02_png";
		t.width = 198;
		t.x = 774.34;
		t.y = 212;
		return t;
	};
	_proto.lb_guanka_i = function () {
		var t = new eui.Label();
		this.lb_guanka = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 56;
		t.name = "lb_guanka";
		t.size = 50;
		t.text = "第10关";
		t.textAlign = "center";
		t.textColor = 0xf4fcf7;
		t.verticalAlign = "middle";
		t.width = 202;
		t.x = 559;
		t.y = 168;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.source = "mini_coin";
		t.width = 86;
		t.x = 299.34;
		t.y = 412;
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
		t.size = 40;
		t.text = "63800";
		t.textColor = 0x8c8181;
		t.width = 113;
		t.x = 392.5;
		t.y = 438;
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
		t.size = 40;
		t.text = "经验值";
		t.textColor = 0x8C8181;
		t.width = 147;
		t.x = 760;
		t.y = 438;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "digital_1_json.+";
		t.width = 42;
		t.x = 503;
		t.y = 424;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "digital_2_json.+";
		t.width = 42;
		t.x = 911.34;
		t.y = 424;
		return t;
	};
	_proto.gold_add_img_01_i = function () {
		var t = new eui.Image();
		this.gold_add_img_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_01";
		t.source = "digital_1_json.0";
		t.width = 40;
		t.x = 546;
		t.y = 424;
		return t;
	};
	_proto.gold_add_img_02_i = function () {
		var t = new eui.Image();
		this.gold_add_img_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_02";
		t.source = "digital_1_json.0";
		t.width = 40;
		t.x = 582;
		t.y = 424;
		return t;
	};
	_proto.gold_add_img_03_i = function () {
		var t = new eui.Image();
		this.gold_add_img_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_03";
		t.source = "digital_1_json.0";
		t.width = 40;
		t.x = 618;
		t.y = 424;
		return t;
	};
	_proto.exp_add_img_01_i = function () {
		var t = new eui.Image();
		this.exp_add_img_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_01";
		t.source = "digital_2_json.1";
		t.width = 40;
		t.x = 952.34;
		t.y = 429;
		return t;
	};
	_proto.exp_add_img_02_i = function () {
		var t = new eui.Image();
		this.exp_add_img_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_02";
		t.source = "digital_2_json.0";
		t.width = 40;
		t.x = 986.34;
		t.y = 429;
		return t;
	};
	_proto.exp_add_img_03_i = function () {
		var t = new eui.Image();
		this.exp_add_img_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_03";
		t.source = "digital_2_json.0";
		t.width = 40;
		t.x = 1022.34;
		t.y = 429;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/FightInfoGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	var NoticeGroup$Skin11 = 	(function (_super) {
		__extends(NoticeGroup$Skin11, _super);
		function NoticeGroup$Skin11() {
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
		var _proto = NoticeGroup$Skin11.prototype;

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
		return NoticeGroup$Skin11;
	})(eui.Skin);

	var NoticeGroup$Skin12 = 	(function (_super) {
		__extends(NoticeGroup$Skin12, _super);
		function NoticeGroup$Skin12() {
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
		var _proto = NoticeGroup$Skin12.prototype;

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
		return NoticeGroup$Skin12;
	})(eui.Skin);

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
		return NoticeGroup$Skin14;
	})(eui.Skin);

	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["img_coin_bg","btn_shop","heart_num_lb","img_coin_bg0","btn_shop0","spead_num_lb","img_coin_bg1","btn_shop1","boom_num_lb","img_coin_bg2","btn_shop2","fire_num_lb","group_1"];
		
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
		t.elementsContent = [this.img_coin_bg_i(),this.btn_shop_i(),this.heart_num_lb_i(),this.img_coin_bg0_i(),this.btn_shop0_i(),this.spead_num_lb_i(),this.img_coin_bg1_i(),this.btn_shop1_i(),this.boom_num_lb_i(),this.img_coin_bg2_i(),this.btn_shop2_i(),this.fire_num_lb_i(),this._Image1_i()];
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
		t.x = 80;
		t.y = 93;
		return t;
	};
	_proto.btn_shop_i = function () {
		var t = new eui.Button();
		this.btn_shop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_shop";
		t.width = 58;
		t.x = 51;
		t.y = 84;
		t.skinName = NoticeGroup$Skin11;
		return t;
	};
	_proto.heart_num_lb_i = function () {
		var t = new eui.Label();
		this.heart_num_lb = t;
		t.name = "heart_num_lb";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 125;
		t.y = 100;
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
		t.x = 300;
		t.y = 95;
		return t;
	};
	_proto.btn_shop0_i = function () {
		var t = new eui.Button();
		this.btn_shop0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_shop";
		t.width = 58;
		t.x = 271;
		t.y = 86;
		t.skinName = NoticeGroup$Skin12;
		return t;
	};
	_proto.spead_num_lb_i = function () {
		var t = new eui.Label();
		this.spead_num_lb = t;
		t.name = "spead_num_lb";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 345;
		t.y = 102;
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
		t.x = 80;
		t.y = 178;
		return t;
	};
	_proto.btn_shop1_i = function () {
		var t = new eui.Button();
		this.btn_shop1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_shop";
		t.width = 58;
		t.x = 51;
		t.y = 169;
		t.skinName = NoticeGroup$Skin13;
		return t;
	};
	_proto.boom_num_lb_i = function () {
		var t = new eui.Label();
		this.boom_num_lb = t;
		t.name = "boom_num_lb";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 125;
		t.y = 185;
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
		t.x = 300;
		t.y = 178;
		return t;
	};
	_proto.btn_shop2_i = function () {
		var t = new eui.Button();
		this.btn_shop2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_shop";
		t.width = 58;
		t.x = 271;
		t.y = 169;
		t.skinName = NoticeGroup$Skin14;
		return t;
	};
	_proto.fire_num_lb_i = function () {
		var t = new eui.Label();
		this.fire_num_lb = t;
		t.name = "fire_num_lb";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 345;
		t.y = 185;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.source = "match_art_lb_png";
		t.width = 214;
		t.x = 138;
		t.y = 14;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/fightingUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin15 = 	(function (_super) {
		__extends(LoginUI$Skin15, _super);
		function LoginUI$Skin15() {
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
		var _proto = LoginUI$Skin15.prototype;

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
		return LoginUI$Skin15;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","ground_layer","map_layer","bullet_layer","player_layer","fighting_parent","boom_btn","controler_hit_btn","controler_parent","test"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_parent_i(),this.boom_btn_i(),this.controler_parent_i(),this.test_i()];
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
		t.scale9Grid = new egret.Rectangle(25,25,150,150);
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
		t.y = 484.23;
		t.skinName = LoginUI$Skin15;
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
		t.x = 0;
		t.y = 303.64;
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
		t.label = "test";
		t.name = "test";
		t.x = 1129;
		t.y = 83;
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
	function LoginUI() {
		_super.call(this);
		this.skinParts = ["match_tip"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.match_tip_i()];
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
		t.text = "匹配中....";
		t.textColor = 0x0c0f19;
		t.width = 244;
		t.x = 624;
		t.y = 598;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/FightResultUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin16 = 	(function (_super) {
		__extends(LoginUI$Skin16, _super);
		function LoginUI$Skin16() {
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
		var _proto = LoginUI$Skin16.prototype;

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
		return LoginUI$Skin16;
	})(eui.Skin);

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
						new eui.SetProperty("_Image1","source","replay_02_png")
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
		return LoginUI$Skin17;
	})(eui.Skin);

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
						new eui.SetProperty("_Image1","source","share_02_png")
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
		return LoginUI$Skin18;
	})(eui.Skin);

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
						new eui.SetProperty("_Image1","source","backhall_02_png")
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
						new eui.SetProperty("_Image1","source","backhall_02_png")
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
		return LoginUI$Skin21;
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
		t.height = 537;
		t.source = "fighting_result_png";
		t.width = 921;
		t.x = 199.5;
		t.y = 102.5;
		return t;
	};
	_proto.left_name_lb_i = function () {
		var t = new eui.Label();
		this.left_name_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 80;
		t.name = "left_name_lb";
		t.size = 50;
		t.text = "罗罗他爸落落";
		t.textAlign = "center";
		t.textColor = 0xf4ebeb;
		t.verticalAlign = "middle";
		t.width = 353;
		t.x = 205;
		t.y = 315;
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
		t.skinName = LoginUI$Skin16;
		return t;
	};
	_proto.win_title_img_i = function () {
		var t = new eui.Image();
		this.win_title_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 198;
		t.name = "win_title_img";
		t.source = "win_png";
		t.width = 696;
		t.x = 324.34;
		t.y = -18.5;
		return t;
	};
	_proto.replay_btn_i = function () {
		var t = new eui.Button();
		this.replay_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "replay_btn";
		t.width = 266;
		t.x = 209.34;
		t.y = 532;
		t.skinName = LoginUI$Skin17;
		return t;
	};
	_proto.share_btn_i = function () {
		var t = new eui.Button();
		this.share_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "share_btn";
		t.width = 266;
		t.x = 528;
		t.y = 532;
		t.skinName = LoginUI$Skin18;
		return t;
	};
	_proto.goback_btn_i = function () {
		var t = new eui.Button();
		this.goback_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "goback_btn";
		t.width = 266;
		t.x = 841.34;
		t.y = 532;
		t.skinName = LoginUI$Skin19;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.source = "mini_head";
		t.width = 142;
		t.x = 307;
		t.y = 187;
		return t;
	};
	_proto.replay_fail_btn_i = function () {
		var t = new eui.Button();
		this.replay_fail_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "replay_fail_btn";
		t.width = 266;
		t.x = 352;
		t.y = 532;
		t.skinName = LoginUI$Skin20;
		return t;
	};
	_proto.goback_fail_btn_i = function () {
		var t = new eui.Button();
		this.goback_fail_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.label = "";
		t.name = "goback_fail_btn";
		t.width = 266;
		t.x = 668.34;
		t.y = 532;
		t.skinName = LoginUI$Skin21;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 122;
		t.source = "mini_head";
		t.width = 142;
		t.x = 815.34;
		t.y = 193;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.fontFamily = "Microsoft YaHei";
		t.height = 56;
		t.size = 50;
		t.text = "战胜了";
		t.textAlign = "center";
		t.textColor = 0x3ce881;
		t.verticalAlign = "middle";
		t.width = 202;
		t.x = 546;
		t.y = 220;
		return t;
	};
	_proto.right_name_lb_i = function () {
		var t = new eui.Label();
		this.right_name_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.fontFamily = "Microsoft YaHei";
		t.height = 80;
		t.name = "right_name_lb";
		t.size = 50;
		t.text = "技安他哥他哥";
		t.textAlign = "center";
		t.textColor = 0xf4ebeb;
		t.verticalAlign = "middle";
		t.width = 337;
		t.x = 730;
		t.y = 315;
		return t;
	};
	_proto.left_head_img_i = function () {
		var t = new eui.Image();
		this.left_head_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 104;
		t.name = "left_head_img";
		t.source = "mini_zuanshi";
		t.width = 120;
		t.x = 318;
		t.y = 196;
		return t;
	};
	_proto.right_head_img_i = function () {
		var t = new eui.Image();
		this.right_head_img = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 102;
		t.name = "right_head_img";
		t.source = "mini_weili";
		t.width = 126;
		t.x = 824.84;
		t.y = 205;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 88;
		t.source = "mini_coin";
		t.width = 86;
		t.x = 299.34;
		t.y = 412;
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
		t.size = 40;
		t.text = "63800";
		t.textColor = 0x8c8181;
		t.width = 113;
		t.x = 392.5;
		t.y = 438;
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
		t.size = 40;
		t.text = "经验值";
		t.textColor = 0x8C8181;
		t.width = 147;
		t.x = 760;
		t.y = 438;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "digital_1_json.+";
		t.width = 42;
		t.x = 503;
		t.y = 424;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.source = "digital_2_json.+";
		t.width = 42;
		t.x = 911.34;
		t.y = 424;
		return t;
	};
	_proto.gold_add_img_01_i = function () {
		var t = new eui.Image();
		this.gold_add_img_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_01";
		t.source = "digital_1_json.0";
		t.width = 40;
		t.x = 546;
		t.y = 424;
		return t;
	};
	_proto.gold_add_img_02_i = function () {
		var t = new eui.Image();
		this.gold_add_img_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_02";
		t.source = "digital_1_json.0";
		t.width = 40;
		t.x = 582;
		t.y = 424;
		return t;
	};
	_proto.gold_add_img_03_i = function () {
		var t = new eui.Image();
		this.gold_add_img_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "gold_add_img_03";
		t.source = "digital_1_json.0";
		t.width = 40;
		t.x = 618;
		t.y = 424;
		return t;
	};
	_proto.exp_add_img_01_i = function () {
		var t = new eui.Image();
		this.exp_add_img_01 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_01";
		t.source = "digital_2_json.1";
		t.width = 40;
		t.x = 952.34;
		t.y = 429;
		return t;
	};
	_proto.exp_add_img_02_i = function () {
		var t = new eui.Image();
		this.exp_add_img_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_02";
		t.source = "digital_2_json.0";
		t.width = 40;
		t.x = 986.34;
		t.y = 429;
		return t;
	};
	_proto.exp_add_img_03_i = function () {
		var t = new eui.Image();
		this.exp_add_img_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 48;
		t.name = "exp_add_img_03";
		t.source = "digital_2_json.0";
		t.width = 40;
		t.x = 1022.34;
		t.y = 429;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/HallUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
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
		return LoginUI$Skin24;
	})(eui.Skin);

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
			t.source = "control_laba_png";
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
		return LoginUI$Skin31;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_info","info_grp","img_head_bg","img_info","img_exp_bg","img_exp_value","img_coin_bg","img_zuan_bg","btn_noticetip","btn_shop","hall_id_lb","coin_num_lb","zuan_num_lb","img_lv_lb","btn_map_diy","btn_match_pvp","btn_training_pve","btn_noend_pve","btn_friend_pvp","btn_gm","btn_map_diy3","img_info0","img_info1","img_info2","rank_grounp_main"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.info_grp_i(),this.img_head_bg_i(),this.img_info_i(),this.img_exp_bg_i(),this.img_exp_value_i(),this.img_coin_bg_i(),this.img_zuan_bg_i(),this.btn_noticetip_i(),this.btn_shop_i(),this.hall_id_lb_i(),this.coin_num_lb_i(),this.zuan_num_lb_i(),this.img_lv_lb_i(),this.btn_map_diy_i(),this.btn_match_pvp_i(),this.btn_training_pve_i(),this.btn_noend_pve_i(),this.btn_friend_pvp_i(),this.btn_gm_i(),this.btn_map_diy3_i(),this.rank_grounp_main_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 750;
		t.source = "bg_ppt_1_png";
		t.width = 1334;
		t.x = -2;
		t.y = 0;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 460;
		t.source = "new_ui_01_png";
		t.width = 1026;
		t.x = 167.09;
		t.y = 145;
		return t;
	};
	_proto.info_grp_i = function () {
		var t = new eui.Group();
		this.info_grp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51;
		t.name = "info_grp";
		t.width = 52;
		t.x = 15;
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
		t.skinName = LoginUI$Skin22;
		return t;
	};
	_proto.img_head_bg_i = function () {
		var t = new eui.Image();
		this.img_head_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82;
		t.name = "img_head_bg";
		t.source = "mini_info";
		t.width = 216;
		t.x = 93.23;
		t.y = 25.5;
		return t;
	};
	_proto.img_info_i = function () {
		var t = new eui.Image();
		this.img_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.82;
		t.name = "img_info";
		t.source = "HallTexture_json.head_8_png";
		t.width = 73.27;
		t.x = 8.73;
		t.y = 22.12;
		return t;
	};
	_proto.img_exp_bg_i = function () {
		var t = new eui.Image();
		this.img_exp_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.name = "img_exp_bg";
		t.source = "mini_jinyantiaobg";
		t.width = 171;
		t.x = 133.15;
		t.y = 73.98;
		return t;
	};
	_proto.img_exp_value_i = function () {
		var t = new eui.Image();
		this.img_exp_value = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29;
		t.name = "img_exp_value";
		t.source = "mini_jinyantiao";
		t.width = 170;
		t.x = 133.24;
		t.y = 73.36;
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
		t.width = 160;
		t.x = 384.38;
		t.y = 21;
		return t;
	};
	_proto.img_zuan_bg_i = function () {
		var t = new eui.Image();
		this.img_zuan_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "img_zuan_bg";
		t.source = "mini_own";
		t.width = 160;
		t.x = 661.09;
		t.y = 24.48;
		return t;
	};
	_proto.btn_noticetip_i = function () {
		var t = new eui.Button();
		this.btn_noticetip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_noticetip";
		t.width = 58;
		t.x = 622.09;
		t.y = 19;
		t.skinName = LoginUI$Skin23;
		return t;
	};
	_proto.btn_shop_i = function () {
		var t = new eui.Button();
		this.btn_shop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_shop";
		t.width = 58;
		t.x = 335.65;
		t.y = 11.53;
		t.skinName = LoginUI$Skin24;
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
		t.stroke = 1;
		t.strokeColor = 0xc63b3b;
		t.text = "我是技安她哥";
		t.width = 207;
		t.x = 104.72;
		t.y = 37.98;
		return t;
	};
	_proto.coin_num_lb_i = function () {
		var t = new eui.Label();
		this.coin_num_lb = t;
		t.name = "coin_num_lb";
		t.text = "2222";
		t.textColor = 0x443f3f;
		t.x = 453.74;
		t.y = 29.48;
		return t;
	};
	_proto.zuan_num_lb_i = function () {
		var t = new eui.Label();
		this.zuan_num_lb = t;
		t.name = "zuan_num_lb";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 741.09;
		t.y = 30.48;
		return t;
	};
	_proto.img_lv_lb_i = function () {
		var t = new eui.Label();
		this.img_lv_lb = t;
		t.name = "img_lv_lb";
		t.text = "22";
		t.textColor = 0x5b4a4a;
		t.x = 100;
		t.y = 74;
		return t;
	};
	_proto.btn_map_diy_i = function () {
		var t = new eui.Button();
		this.btn_map_diy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 178;
		t.label = "";
		t.name = "btn_map_diy";
		t.width = 245;
		t.x = 275.74;
		t.y = 160.66;
		t.skinName = LoginUI$Skin25;
		return t;
	};
	_proto.btn_match_pvp_i = function () {
		var t = new eui.Button();
		this.btn_match_pvp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 469;
		t.label = "";
		t.name = "btn_match_pvp";
		t.width = 375;
		t.x = 477.5;
		t.y = 145;
		t.skinName = LoginUI$Skin26;
		return t;
	};
	_proto.btn_training_pve_i = function () {
		var t = new eui.Button();
		this.btn_training_pve = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.label = "";
		t.name = "btn_training_pve";
		t.width = 216;
		t.x = 946.45;
		t.y = 140.5;
		t.skinName = LoginUI$Skin27;
		return t;
	};
	_proto.btn_noend_pve_i = function () {
		var t = new eui.Button();
		this.btn_noend_pve = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 164;
		t.label = "";
		t.name = "btn_noend_pve";
		t.width = 216;
		t.x = 167.09;
		t.y = 293;
		t.skinName = LoginUI$Skin28;
		return t;
	};
	_proto.btn_friend_pvp_i = function () {
		var t = new eui.Button();
		this.btn_friend_pvp = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 326;
		t.label = "";
		t.name = "btn_friend_pvp";
		t.width = 239;
		t.x = 852.5;
		t.y = 279;
		t.skinName = LoginUI$Skin29;
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
		t.width = 49;
		t.x = 1264.48;
		t.y = 15.41;
		t.skinName = LoginUI$Skin30;
		return t;
	};
	_proto.btn_map_diy3_i = function () {
		var t = new eui.Button();
		this.btn_map_diy3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 151.43;
		t.label = "";
		t.name = "btn_map_diy";
		t.width = 167.94;
		t.x = 335.65;
		t.y = 453.57;
		t.skinName = LoginUI$Skin31;
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
		t.elementsContent = [this._Image3_i(),this._Image4_i(),this.img_info0_i(),this._Image5_i(),this.img_info1_i(),this._Image6_i(),this.img_info2_i(),this._Image7_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 355;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "new_ui_15_png";
		t.width = 125;
		t.x = 1.2699999999999996;
		t.y = 4.64;
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
		t.width = 84;
		t.x = 21.770000000000003;
		t.y = 77.64;
		return t;
	};
	_proto.img_info0_i = function () {
		var t = new eui.Image();
		this.img_info0 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68.82;
		t.name = "img_info";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "HallTexture_json.head_8_png";
		t.width = 63.27;
		t.x = 31.130000000000003;
		t.y = 83.64;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mini_head";
		t.width = 84;
		t.x = 22.369999999999997;
		t.y = 169.82;
		return t;
	};
	_proto.img_info1_i = function () {
		var t = new eui.Image();
		this.img_info1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68.82;
		t.name = "img_info";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "HallTexture_json.head_8_png";
		t.width = 63.27;
		t.x = 33.73;
		t.y = 175.82;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 78;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "mini_head";
		t.width = 84;
		t.x = 22.369999999999997;
		t.y = 261.23;
		return t;
	};
	_proto.img_info2_i = function () {
		var t = new eui.Image();
		this.img_info2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 68.82;
		t.name = "img_info";
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "HallTexture_json.head_8_png";
		t.width = 63.27;
		t.x = 33.73;
		t.y = 267.23;
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "new_ui_16_png";
		t.width = 35;
		t.x = 8;
		t.y = 64.64;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "new_ui_17_png";
		t.width = 35;
		t.x = 6.27;
		t.y = 156.82;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38;
		t.scaleX = 1;
		t.scaleY = 1;
		t.source = "new_ui_18_png";
		t.width = 35;
		t.x = 8.27;
		t.y = 242.82;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/LoginUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	function LoginUI() {
		_super.call(this);
		this.skinParts = ["account_lb_txt","password_lb_txt","account_lb_title","password_lb_title","btn_registe","btn_login"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.account_lb_txt_i(),this.password_lb_txt_i(),this.account_lb_title_i(),this.password_lb_title_i(),this.btn_registe_i(),this.btn_login_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 750;
		t.source = "login_bg_ppt_png";
		t.width = 1334;
		t.x = -1.5;
		t.y = 1.5;
		return t;
	};
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
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/mapDIYUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
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
						new eui.SetProperty("_Image1","source","diy_btn_xia_02_png")
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
						new eui.SetProperty("_Image1","source","mymap_2_png")
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
		return LoginUI$Skin35;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["btn_noticetip","btn_shop","coin_num_lb","zuan_num_lb","btn_ground","btn_block","btn_decorate","STYLE_BTN","res_group","res_scroller","btn_mymap","t_di","t_biao","t_zhang","t_ai","t_zhuang","t_shi","btn_ground_lb","btn_block_lb","btn_decorate_lb","lb_1p","lb_2p","lb_eraser","lb_save","btn_rank"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this.btn_noticetip_i(),this.btn_shop_i(),this.coin_num_lb_i(),this.zuan_num_lb_i(),this._Image3_i(),this._Image4_i(),this.btn_ground_i(),this.btn_block_i(),this.btn_decorate_i(),this.STYLE_BTN_i(),this.res_scroller_i(),this._Label1_i(),this.btn_mymap_i(),this.t_di_i(),this.t_biao_i(),this.t_zhang_i(),this.t_ai_i(),this.t_zhuang_i(),this.t_shi_i(),this.btn_ground_lb_i(),this.btn_block_lb_i(),this.btn_decorate_lb_i(),this.lb_1p_i(),this.lb_2p_i(),this.lb_eraser_i(),this.lb_save_i(),this.btn_rank_i()];
	}
	var _proto = LoginUI.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.source = "mini_own";
		t.width = 160;
		t.x = 680.39;
		t.y = 11.08;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.source = "mini_own";
		t.width = 160;
		t.x = 957.1;
		t.y = 14.56;
		return t;
	};
	_proto.btn_noticetip_i = function () {
		var t = new eui.Button();
		this.btn_noticetip = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_noticetip";
		t.width = 58;
		t.x = 918.1;
		t.y = 9.08;
		t.skinName = LoginUI$Skin32;
		return t;
	};
	_proto.btn_shop_i = function () {
		var t = new eui.Button();
		this.btn_shop = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_shop";
		t.width = 58;
		t.x = 631.66;
		t.y = 5.61;
		t.skinName = LoginUI$Skin33;
		return t;
	};
	_proto.coin_num_lb_i = function () {
		var t = new eui.Label();
		this.coin_num_lb = t;
		t.name = "coin_num_lb";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 749.75;
		t.y = 19.56;
		return t;
	};
	_proto.zuan_num_lb_i = function () {
		var t = new eui.Label();
		this.zuan_num_lb = t;
		t.name = "zuan_num_lb";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 1037.1;
		t.y = 20.56;
		return t;
	};
	_proto._Image3_i = function () {
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
	_proto._Image4_i = function () {
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
		t.skinName = LoginUI$Skin34;
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
		t.skinName = LoginUI$Skin35;
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
		t.label = "排行榜";
		t.name = "btn_rank";
		t.x = 1177.48;
		t.y = 85.96;
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
		this.skinParts = ["lb_title","lb_author","lb_sign","like_heart","like_num","group_1"];
		
		this.height = 263;
		this.width = 742;
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
		t.width = 740.92;
		t.x = 0.7;
		t.y = 0.66;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.lb_title_i(),this.lb_author_i(),this.lb_sign_i(),this._Label1_i(),this._Label2_i(),this._Image3_i(),this.like_heart_i(),this.like_num_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 253.33;
		t.scale9Grid = new egret.Rectangle(18,18,114,114);
		t.source = "normal_bg_2_png";
		t.width = 733.34;
		t.x = 4.33;
		t.y = 4.67;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.source = "map_rank_name_bg_png";
		t.width = 274.66;
		t.x = 4.33;
		t.y = 16.68;
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
		t.textColor = 0xfffef9;
		t.width = 243.33;
		t.x = 20.68;
		t.y = 26.34;
		return t;
	};
	_proto.lb_author_i = function () {
		var t = new eui.Label();
		this.lb_author = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.67;
		t.name = "lb_author";
		t.size = 22;
		t.text = "我是小猪佩奇";
		t.textColor = 0xFFFEF9;
		t.width = 243.33;
		t.x = 127.67;
		t.y = 74.01;
		return t;
	};
	_proto.lb_sign_i = function () {
		var t = new eui.Label();
		this.lb_sign = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 103.34;
		t.name = "lb_sign";
		t.size = 22;
		t.text = "     我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇";
		t.textAlign = "left";
		t.textColor = 0xFFFEF9;
		t.verticalAlign = "middle";
		t.width = 391.66;
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
		t.x = 654.97;
		t.y = 215.36;
		return t;
	};
	_proto.like_heart_i = function () {
		var t = new eui.Image();
		this.like_heart = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.name = "like_heart";
		t.source = "mini_heart";
		t.width = 31;
		t.x = 661.47;
		t.y = 220.52;
		return t;
	};
	_proto.like_num_i = function () {
		var t = new eui.Label();
		this.like_num = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33;
		t.name = "like_num";
		t.size = 18;
		t.text = "122";
		t.textAlign = "center";
		t.textColor = 0xf045a9;
		t.verticalAlign = "middle";
		t.width = 37;
		t.x = 696;
		t.y = 218;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/MapRankUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
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
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
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
		return LoginUI$Skin36;
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
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.33;
		t.label = "";
		t.name = "btn_close";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 68.33;
		t.x = 1048.28;
		t.y = 7.17;
		t.skinName = LoginUI$Skin36;
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
		t.y = 193.52;
		return t;
	};
	_proto.lb_new_i = function () {
		var t = new eui.Label();
		this.lb_new = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 109.04;
		t.name = "lb_new";
		t.text = "最新";
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
		t.text = "最热";
		t.textAlign = "center";
		t.textColor = 0x6377DC;
		t.verticalAlign = "middle";
		t.width = 59.7;
		t.x = 219.35;
		t.y = 196.93;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/MapViewGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	var NoticeGroup$Skin37 = 	(function (_super) {
		__extends(NoticeGroup$Skin37, _super);
		function NoticeGroup$Skin37() {
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
		var _proto = NoticeGroup$Skin37.prototype;

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
		return NoticeGroup$Skin37;
	})(eui.Skin);

	var NoticeGroup$Skin38 = 	(function (_super) {
		__extends(NoticeGroup$Skin38, _super);
		function NoticeGroup$Skin38() {
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
		var _proto = NoticeGroup$Skin38.prototype;

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
		return NoticeGroup$Skin38;
	})(eui.Skin);

	var NoticeGroup$Skin39 = 	(function (_super) {
		__extends(NoticeGroup$Skin39, _super);
		function NoticeGroup$Skin39() {
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
		var _proto = NoticeGroup$Skin39.prototype;

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
		return NoticeGroup$Skin39;
	})(eui.Skin);

	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["view_add","lb_title","lb_author","lb_sign","group_1","view_fight_btn","view_change_btn","view_add_btn"];
		
		this.height = 263;
		this.width = 742;
		this.elementsContent = [this._Image1_i(),this.view_add_i(),this.group_1_i(),this.view_fight_btn_i(),this.view_change_btn_i(),this.view_add_btn_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 253.33;
		t.scale9Grid = new egret.Rectangle(18,18,114,114);
		t.source = "normal_bg_2_png";
		t.width = 733.34;
		t.x = 4.33;
		t.y = 4.67;
		return t;
	};
	_proto.view_add_i = function () {
		var t = new eui.Image();
		this.view_add = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 239;
		t.name = "view_add";
		t.source = "add_my_map_png";
		t.width = 283;
		t.x = 13;
		t.y = 14;
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
		t.x = 0.7;
		t.y = 0.66;
		t.elementsContent = [this._Image2_i(),this.lb_title_i(),this.lb_author_i(),this.lb_sign_i(),this._Label1_i(),this._Label2_i()];
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 49.33;
		t.source = "map_rank_name_bg_png";
		t.width = 274.66;
		t.x = 298.9;
		t.y = 14.84;
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
		t.textColor = 0xfffef9;
		t.width = 243.33;
		t.x = 315.25;
		t.y = 24.5;
		return t;
	};
	_proto.lb_author_i = function () {
		var t = new eui.Label();
		this.lb_author = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.67;
		t.name = "lb_author";
		t.size = 22;
		t.text = "我是小猪佩奇";
		t.textColor = 0xFFFEF9;
		t.width = 243.33;
		t.x = 422.24;
		t.y = 72.17;
		return t;
	};
	_proto.lb_sign_i = function () {
		var t = new eui.Label();
		this.lb_sign = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 103.34;
		t.name = "lb_sign";
		t.size = 22;
		t.text = "     我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇我是小猪佩奇";
		t.textAlign = "left";
		t.textColor = 0xFFFEF9;
		t.verticalAlign = "middle";
		t.width = 420.66;
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
		t.width = 111;
		t.x = 383.23;
		t.y = 202;
		t.skinName = NoticeGroup$Skin37;
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
		t.x = 554.57;
		t.y = 202;
		t.skinName = NoticeGroup$Skin38;
		return t;
	};
	_proto.view_add_btn_i = function () {
		var t = new eui.Button();
		this.view_add_btn = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.label = "新 增";
		t.name = "view_add_btn";
		t.width = 111;
		t.x = 462.56;
		t.y = 202;
		t.skinName = NoticeGroup$Skin39;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/MapViewUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
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
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
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
		return LoginUI$Skin40;
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
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.33;
		t.label = "";
		t.name = "btn_close";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 68.33;
		t.x = 1048.28;
		t.y = 7.17;
		t.skinName = LoginUI$Skin40;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/NewRankUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
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
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
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
		return LoginUI$Skin41;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","match_rank_bg","lv_rank_bg","match_rank_lb","lv_rank_lb","scroll_group","scroll","myrank","name","desc","head","myrankG","all_rank_bg","friend_rank_bg","friend_rank_lb","all_rank_lb","fighting_parent","btn_close"];
		
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
		t.x = 125.4;
		t.y = 6;
		t.elementsContent = [this._Image1_i(),this._Image2_i(),this.fighting_platform_i(),this._Image3_i(),this.match_rank_bg_i(),this.lv_rank_bg_i(),this.match_rank_lb_i(),this.lv_rank_lb_i(),this.scroll_i(),this.myrankG_i(),this.all_rank_bg_i(),this.friend_rank_bg_i(),this.friend_rank_lb_i(),this.all_rank_lb_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 72;
		t.source = "rank_title_lb_png";
		t.visible = false;
		t.width = 346.67;
		t.x = 45.61;
		t.y = 36.2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 85.34;
		t.source = "rank_png";
		t.width = 301.33;
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
		t.scale9Grid = new egret.Rectangle(25,25,150,150);
		t.source = "fighting_kuang_png";
		t.width = 1071.69;
		t.x = 1.99;
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
		t.height = 59.39;
		t.name = "match_rank_bg";
		t.source = "rank_select_02_png";
		t.width = 135.63;
		t.x = 84.85;
		t.y = 145.72;
		return t;
	};
	_proto.lv_rank_bg_i = function () {
		var t = new eui.Image();
		this.lv_rank_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59.39;
		t.name = "lv_rank_bg";
		t.source = "rank_select_01_png";
		t.width = 134.3;
		t.x = 85.54;
		t.y = 211.7;
		return t;
	};
	_proto.match_rank_lb_i = function () {
		var t = new eui.Label();
		this.match_rank_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52.67;
		t.name = "match_rank_lb";
		t.size = 21;
		t.text = "匹配对战";
		t.textAlign = "center";
		t.textColor = 0x148CBA;
		t.verticalAlign = "middle";
		t.width = 118;
		t.x = 96.35;
		t.y = 152.99;
		return t;
	};
	_proto.lv_rank_lb_i = function () {
		var t = new eui.Label();
		this.lv_rank_lb = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52.67;
		t.name = "lv_rank_lb";
		t.size = 21;
		t.text = "等级";
		t.textAlign = "center";
		t.textColor = 0x148CBA;
		t.verticalAlign = "middle";
		t.width = 118;
		t.x = 95.62;
		t.y = 219.05;
		return t;
	};
	_proto.scroll_i = function () {
		var t = new eui.Scroller();
		this.scroll = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 510.6;
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
		t.height = 513.63;
		t.name = "scroll_group";
		t.width = 813.64;
		t.elementsContent = [this._Group1_i(),this._Group2_i(),this._Group3_i(),this._Group4_i(),this._Group5_i(),this._Group6_i(),this._Group7_i(),this._Group8_i()];
		return t;
	};
	_proto._Group1_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 2.7;
		t.y = 2.66;
		t.elementsContent = [this._Image4_i(),this._Label1_i(),this._Label2_i(),this._Label3_i(),this._Image5_i(),this._Image6_i()];
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.83;
		t.source = "rank_data_normal_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 2.84;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.text = "27";
		t.textColor = 0x148cba;
		t.width = 47.33;
		t.x = 47.62;
		t.y = 17.67;
		return t;
	};
	_proto._Label2_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.03;
		t.text = "无敌掌门人";
		t.textColor = 0x148CBA;
		t.width = 164;
		t.x = 248.54;
		t.y = 15.54;
		return t;
	};
	_proto._Label3_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.size = 26;
		t.text = "胜场 ： 8   胜率：40%";
		t.textColor = 0x148CBA;
		t.width = 292.79;
		t.x = 482.78;
		t.y = 19.2;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.67;
		t.source = "mini_head";
		t.width = 42.67;
		t.x = 189.98;
		t.y = 9.34;
		return t;
	};
	_proto._Image6_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.34;
		t.source = "mini_boom";
		t.width = 34.67;
		t.x = 192.69;
		t.y = 11.7;
		return t;
	};
	_proto._Group2_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 0.54;
		t.y = 71.74;
		t.elementsContent = [this._Image7_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this._Image8_i(),this._Image9_i()];
		return t;
	};
	_proto._Image7_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.83;
		t.source = "rank_data_normal_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 2.84;
		return t;
	};
	_proto._Label4_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.text = "27";
		t.textColor = 0x148CBA;
		t.width = 47.33;
		t.x = 47.62;
		t.y = 17.67;
		return t;
	};
	_proto._Label5_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.03;
		t.text = "无敌掌门人";
		t.textColor = 0x148CBA;
		t.width = 164;
		t.x = 248.54;
		t.y = 15.54;
		return t;
	};
	_proto._Label6_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.size = 26;
		t.text = "胜场 ： 8   胜率：40%";
		t.textColor = 0x148CBA;
		t.width = 292.79;
		t.x = 482.78;
		t.y = 19.2;
		return t;
	};
	_proto._Image8_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.67;
		t.source = "mini_head";
		t.width = 42.67;
		t.x = 189.98;
		t.y = 9.34;
		return t;
	};
	_proto._Image9_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.34;
		t.source = "mini_boom";
		t.width = 34.67;
		t.x = 192.69;
		t.y = 11.7;
		return t;
	};
	_proto._Group3_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 0.07;
		t.y = 139.45;
		t.elementsContent = [this._Image10_i(),this._Label7_i(),this._Label8_i(),this._Label9_i(),this._Image11_i(),this._Image12_i()];
		return t;
	};
	_proto._Image10_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.83;
		t.source = "rank_data_normal_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 2.84;
		return t;
	};
	_proto._Label7_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.text = "27";
		t.textColor = 0x148CBA;
		t.width = 47.33;
		t.x = 47.62;
		t.y = 17.67;
		return t;
	};
	_proto._Label8_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.03;
		t.text = "无敌掌门人";
		t.textColor = 0x148CBA;
		t.width = 164;
		t.x = 248.54;
		t.y = 15.54;
		return t;
	};
	_proto._Label9_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.size = 26;
		t.text = "胜场 ： 8   胜率：40%";
		t.textColor = 0x148CBA;
		t.width = 292.79;
		t.x = 482.78;
		t.y = 19.2;
		return t;
	};
	_proto._Image11_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.67;
		t.source = "mini_head";
		t.width = 42.67;
		t.x = 189.98;
		t.y = 9.34;
		return t;
	};
	_proto._Image12_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.34;
		t.source = "mini_boom";
		t.width = 34.67;
		t.x = 192.69;
		t.y = 11.7;
		return t;
	};
	_proto._Group4_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 1.24;
		t.y = 208.11;
		t.elementsContent = [this._Image13_i(),this._Label10_i(),this._Label11_i(),this._Label12_i(),this._Image14_i(),this._Image15_i()];
		return t;
	};
	_proto._Image13_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.83;
		t.source = "rank_data_normal_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 2.84;
		return t;
	};
	_proto._Label10_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.text = "27";
		t.textColor = 0x148CBA;
		t.width = 47.33;
		t.x = 47.62;
		t.y = 17.67;
		return t;
	};
	_proto._Label11_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.03;
		t.text = "无敌掌门人";
		t.textColor = 0x148CBA;
		t.width = 164;
		t.x = 248.54;
		t.y = 15.54;
		return t;
	};
	_proto._Label12_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.size = 26;
		t.text = "胜场 ： 8   胜率：40%";
		t.textColor = 0x148CBA;
		t.width = 292.79;
		t.x = 482.78;
		t.y = 19.2;
		return t;
	};
	_proto._Image14_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.67;
		t.source = "mini_head";
		t.width = 42.67;
		t.x = 189.98;
		t.y = 9.34;
		return t;
	};
	_proto._Image15_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.34;
		t.source = "mini_boom";
		t.width = 34.67;
		t.x = 192.69;
		t.y = 11.7;
		return t;
	};
	_proto._Group5_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 1.24;
		t.y = 275.81;
		t.elementsContent = [this._Image16_i(),this._Label13_i(),this._Label14_i(),this._Label15_i(),this._Image17_i(),this._Image18_i()];
		return t;
	};
	_proto._Image16_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.83;
		t.source = "rank_data_normal_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 2.84;
		return t;
	};
	_proto._Label13_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.text = "27";
		t.textColor = 0x148CBA;
		t.width = 47.33;
		t.x = 47.62;
		t.y = 17.67;
		return t;
	};
	_proto._Label14_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.03;
		t.text = "无敌掌门人";
		t.textColor = 0x148CBA;
		t.width = 164;
		t.x = 248.54;
		t.y = 15.54;
		return t;
	};
	_proto._Label15_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.size = 26;
		t.text = "胜场 ： 8   胜率：40%";
		t.textColor = 0x148CBA;
		t.width = 292.79;
		t.x = 482.78;
		t.y = 19.2;
		return t;
	};
	_proto._Image17_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.67;
		t.source = "mini_head";
		t.width = 42.67;
		t.x = 189.98;
		t.y = 9.34;
		return t;
	};
	_proto._Image18_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.34;
		t.source = "mini_boom";
		t.width = 34.67;
		t.x = 192.69;
		t.y = 11.7;
		return t;
	};
	_proto._Group6_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 0.9;
		t.y = 343.52;
		t.elementsContent = [this._Image19_i(),this._Label16_i(),this._Label17_i(),this._Label18_i(),this._Image20_i(),this._Image21_i()];
		return t;
	};
	_proto._Image19_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.83;
		t.source = "rank_data_normal_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 2.84;
		return t;
	};
	_proto._Label16_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.text = "27";
		t.textColor = 0x148CBA;
		t.width = 47.33;
		t.x = 47.62;
		t.y = 17.67;
		return t;
	};
	_proto._Label17_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.03;
		t.text = "无敌掌门人";
		t.textColor = 0x148CBA;
		t.width = 164;
		t.x = 248.54;
		t.y = 15.54;
		return t;
	};
	_proto._Label18_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.size = 26;
		t.text = "胜场 ： 8   胜率：40%";
		t.textColor = 0x148CBA;
		t.width = 292.79;
		t.x = 482.78;
		t.y = 19.2;
		return t;
	};
	_proto._Image20_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.67;
		t.source = "mini_head";
		t.width = 42.67;
		t.x = 189.98;
		t.y = 9.34;
		return t;
	};
	_proto._Image21_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.34;
		t.source = "mini_boom";
		t.width = 34.67;
		t.x = 192.69;
		t.y = 11.7;
		return t;
	};
	_proto._Group7_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 1.55;
		t.y = 409.71;
		t.elementsContent = [this._Image22_i(),this._Label19_i(),this._Label20_i(),this._Label21_i(),this._Image23_i(),this._Image24_i()];
		return t;
	};
	_proto._Image22_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.83;
		t.source = "rank_data_normal_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 2.84;
		return t;
	};
	_proto._Label19_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.text = "27";
		t.textColor = 0x148CBA;
		t.width = 47.33;
		t.x = 47.62;
		t.y = 17.67;
		return t;
	};
	_proto._Label20_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.03;
		t.text = "无敌掌门人";
		t.textColor = 0x148CBA;
		t.width = 164;
		t.x = 248.54;
		t.y = 15.54;
		return t;
	};
	_proto._Label21_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.size = 26;
		t.text = "胜场 ： 8   胜率：40%";
		t.textColor = 0x148CBA;
		t.width = 292.79;
		t.x = 482.78;
		t.y = 19.2;
		return t;
	};
	_proto._Image23_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.67;
		t.source = "mini_head";
		t.width = 42.67;
		t.x = 189.98;
		t.y = 9.34;
		return t;
	};
	_proto._Image24_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.34;
		t.source = "mini_boom";
		t.width = 34.67;
		t.x = 192.69;
		t.y = 11.7;
		return t;
	};
	_proto._Group8_i = function () {
		var t = new eui.Group();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.58;
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 0.91;
		t.y = 478.8;
		t.elementsContent = [this._Image25_i(),this._Label22_i(),this._Label23_i(),this._Label24_i(),this._Image26_i(),this._Image27_i()];
		return t;
	};
	_proto._Image25_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.83;
		t.source = "rank_data_normal_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 2.84;
		return t;
	};
	_proto._Label22_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26;
		t.text = "27";
		t.textColor = 0x148CBA;
		t.width = 47.33;
		t.x = 47.62;
		t.y = 17.67;
		return t;
	};
	_proto._Label23_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 29.03;
		t.text = "无敌掌门人";
		t.textColor = 0x148CBA;
		t.width = 164;
		t.x = 248.54;
		t.y = 15.54;
		return t;
	};
	_proto._Label24_i = function () {
		var t = new eui.Label();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 32.06;
		t.size = 26;
		t.text = "胜场 ： 8   胜率：40%";
		t.textColor = 0x148CBA;
		t.width = 292.79;
		t.x = 482.78;
		t.y = 19.2;
		return t;
	};
	_proto._Image26_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.67;
		t.source = "mini_head";
		t.width = 42.67;
		t.x = 189.98;
		t.y = 9.34;
		return t;
	};
	_proto._Image27_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.34;
		t.source = "mini_boom";
		t.width = 34.67;
		t.x = 192.69;
		t.y = 11.7;
		return t;
	};
	_proto.myrankG_i = function () {
		var t = new eui.Group();
		this.myrankG = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.58;
		t.name = "myrankG";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 218.49;
		t.y = 591.84;
		t.elementsContent = [this._Image28_i(),this.myrank_i(),this.name_i(),this.desc_i(),this._Image29_i(),this.head_i()];
		return t;
	};
	_proto._Image28_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.83;
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
		t.text = "三三三";
		t.textColor = 0x148CBA;
		t.width = 96.66;
		t.x = 14.29;
		t.y = 17.67;
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
		t.textColor = 0x148CBA;
		t.width = 164;
		t.x = 248.54;
		t.y = 15.54;
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
		t.text = "胜场 ： 8   胜率：40%";
		t.textColor = 0x148CBA;
		t.width = 292.79;
		t.x = 482.78;
		t.y = 19.2;
		return t;
	};
	_proto._Image29_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.67;
		t.source = "mini_head";
		t.width = 42.67;
		t.x = 189.98;
		t.y = 9.34;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.34;
		t.name = "head";
		t.source = "mini_boom";
		t.width = 34.67;
		t.x = 192.69;
		t.y = 11.7;
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
		t.visible = false;
		t.width = 169.33;
		t.x = 46.46;
		t.y = 40.53;
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
		t.x = 221.63;
		t.y = 38.89;
		return t;
	};
	_proto.friend_rank_lb_i = function () {
		var t = new eui.Label();
		this.friend_rank_lb = t;
		t.name = "friend_rank_lb";
		t.text = "好友榜";
		t.textColor = 0x87751d;
		t.visible = false;
		t.x = 255.09;
		t.y = 58.33;
		return t;
	};
	_proto.all_rank_lb_i = function () {
		var t = new eui.Label();
		this.all_rank_lb = t;
		t.anchorOffsetY = 0;
		t.height = -4.67;
		t.name = "all_rank_lb";
		t.text = "总排行";
		t.textColor = 0x87751D;
		t.visible = false;
		t.x = 83.77;
		t.y = 56.86;
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
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 68.33;
		t.x = 1147.93;
		t.y = 92.85999999999999;
		t.skinName = LoginUI$Skin41;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/noEndBarrStartGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["star_01","star_02","star_03","num_lb","group_1"];
		
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
		t.elementsContent = [this._Image1_i(),this.star_01_i(),this.star_02_i(),this.star_03_i(),this.num_lb_i()];
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
		t.height = 37;
		t.name = "star_01";
		t.source = "barr_nopass_start_png";
		t.width = 35;
		t.x = 5;
		t.y = 77;
		return t;
	};
	_proto.star_02_i = function () {
		var t = new eui.Image();
		this.star_02 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.name = "star_02";
		t.source = "barr_nopass_start_png";
		t.width = 35;
		t.x = 42;
		t.y = 90;
		return t;
	};
	_proto.star_03_i = function () {
		var t = new eui.Image();
		this.star_03 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.name = "star_03";
		t.source = "barr_nopass_start_png";
		t.width = 35;
		t.x = 80;
		t.y = 77;
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
		t.width = 40;
		t.x = 40;
		t.y = 37;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/noEndBarrUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin42 = 	(function (_super) {
		__extends(LoginUI$Skin42, _super);
		function LoginUI$Skin42() {
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
						new eui.SetProperty("_Image1","source","direct_02_png")
					])
				,
				new eui.State ("disabled",
					[
					])
			];
		}
		var _proto = LoginUI$Skin42.prototype;

		_proto._Image1_i = function () {
			var t = new eui.Image();
			this._Image1 = t;
			t.percentHeight = 100;
			t.source = "direct_png";
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
		return LoginUI$Skin42;
	})(eui.Skin);

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
						new eui.SetProperty("_Image1","source","direct_02_png")
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
			t.source = "direct_png";
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
						new eui.SetProperty("_Image1","source","question_02_png")
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
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
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
		return LoginUI$Skin45;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","guanka_layer","btn_left","btn_right","lb_bg_total","lb_star_total","btn_close","fighting_parent"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_platform_i(),this._Image1_i(),this.guanka_layer_i(),this.btn_left_i(),this.btn_right_i(),this._Button1_i(),this._Image2_i(),this.lb_bg_total_i(),this.lb_star_total_i(),this._Image3_i(),this.btn_close_i(),this.fighting_parent_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_platform_i = function () {
		var t = new eui.Image();
		this.fighting_platform = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 599.88;
		t.name = "fighting_platform";
		t.scale9Grid = new egret.Rectangle(25,25,150,150);
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
		t.height = 108;
		t.source = "barr_title_bg_png";
		t.width = 232;
		t.x = 533.98;
		t.y = 3.74;
		return t;
	};
	_proto.guanka_layer_i = function () {
		var t = new eui.Label();
		this.guanka_layer = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.name = "guanka_layer";
		t.size = 32;
		t.text = "第1层";
		t.textAlign = "center";
		t.verticalAlign = "middle";
		t.width = 146;
		t.x = 575.67;
		t.y = 32.71;
		return t;
	};
	_proto.btn_left_i = function () {
		var t = new eui.Button();
		this.btn_left = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 147;
		t.label = "";
		t.name = "btn_left";
		t.width = 87;
		t.x = 25.4;
		t.y = 339;
		t.skinName = LoginUI$Skin42;
		return t;
	};
	_proto.btn_right_i = function () {
		var t = new eui.Button();
		this.btn_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 147;
		t.label = "";
		t.name = "btn_right";
		t.rotation = 180;
		t.width = 87;
		t.x = 1311.4;
		t.y = 490;
		t.skinName = LoginUI$Skin43;
		return t;
	};
	_proto._Button1_i = function () {
		var t = new eui.Button();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67;
		t.label = "";
		t.width = 64;
		t.x = 109.63;
		t.y = 54.39;
		t.skinName = LoginUI$Skin44;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.height = 49;
		t.source = "barr_background_bg_png";
		t.width = 829;
		t.x = 231.33;
		t.y = 681.67;
		return t;
	};
	_proto.lb_bg_total_i = function () {
		var t = new eui.Image();
		this.lb_bg_total = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 40.33;
		t.name = "lb_bg_total";
		t.source = "barr_value_bg_png";
		t.width = 819;
		t.x = 236.02;
		t.y = 686.36;
		return t;
	};
	_proto.lb_star_total_i = function () {
		var t = new eui.Label();
		this.lb_star_total = t;
		t.name = "lb_star_total";
		t.text = "获得100/100颗星";
		t.x = 247.55;
		t.y = 691.52;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 77;
		t.source = "gift_01_png";
		t.width = 95;
		t.x = 1001.91;
		t.y = 664.32;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.91;
		t.label = "";
		t.name = "btn_close";
		t.width = 79.76;
		t.x = 1164.02;
		t.y = 39.89;
		t.skinName = LoginUI$Skin45;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/NoticeGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["img_yellow","img_letter","img_red","lb_title","lb_time","lb_notice_click","group_1"];
		
		this.height = 68;
		this.width = 199;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetY = 0;
		t.height = 66;
		t.name = "group_1";
		t.width = 200;
		t.x = 0;
		t.y = 2;
		t.elementsContent = [this._Image1_i(),this.img_yellow_i(),this.img_letter_i(),this.img_red_i(),this.lb_title_i(),this.lb_time_i(),this.lb_notice_click_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.source = "LoginTexture_json.Bg_kuang_png";
		t.width = 190;
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto.img_yellow_i = function () {
		var t = new eui.Image();
		this.img_yellow = t;
		t.alpha = 0.4;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 59;
		t.name = "img_yellow";
		t.source = "yellow_jianbian_jpg";
		t.width = 190;
		t.x = 4;
		t.y = 0;
		return t;
	};
	_proto.img_letter_i = function () {
		var t = new eui.Image();
		this.img_letter = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 34;
		t.name = "img_letter";
		t.source = "mail_close2_png";
		t.width = 65;
		t.x = 14;
		t.y = 12.5;
		return t;
	};
	_proto.img_red_i = function () {
		var t = new eui.Image();
		this.img_red = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 13;
		t.name = "img_red";
		t.source = "red_png";
		t.width = 12;
		t.x = 10;
		t.y = 13;
		return t;
	};
	_proto.lb_title_i = function () {
		var t = new eui.Label();
		this.lb_title = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 18;
		t.name = "lb_title";
		t.size = 15;
		t.text = "喜报！！！";
		t.width = 96;
		t.x = 91;
		t.y = 7;
		return t;
	};
	_proto.lb_time_i = function () {
		var t = new eui.Label();
		this.lb_time = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 17;
		t.name = "lb_time";
		t.size = 12;
		t.text = "21/6/2018";
		t.width = 85;
		t.x = 91;
		t.y = 33;
		return t;
	};
	_proto.lb_notice_click_i = function () {
		var t = new eui.Label();
		this.lb_notice_click = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 65;
		t.name = "lb_notice_click";
		t.text = "";
		t.width = 198;
		t.x = -1;
		t.y = -2;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/NoticeUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
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
		return LoginUI$Skin47;
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
		t.skinName = LoginUI$Skin46;
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
		t.skinName = LoginUI$Skin47;
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
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
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
		return LoginUI$Skin48;
	})(eui.Skin);

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
						new eui.SetProperty("_Image1","source","btn_type2_2_png")
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
		return LoginUI$Skin49;
	})(eui.Skin);

	var LoginUI$Skin50 = 	(function (_super) {
		__extends(LoginUI$Skin50, _super);
		function LoginUI$Skin50() {
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
		var _proto = LoginUI$Skin50.prototype;

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
		return LoginUI$Skin50;
	})(eui.Skin);

	var LoginUI$Skin51 = 	(function (_super) {
		__extends(LoginUI$Skin51, _super);
		function LoginUI$Skin51() {
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
		var _proto = LoginUI$Skin51.prototype;

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
		return LoginUI$Skin51;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["res_group","res_scroller","btn_fashion","t_shi","t_zhuang","btn_one_lb","btn_paopao","t_pao1","t_pao2","btn_two_lb","btn_texiao","t_te","t_xiao","btn_three_lb","btn_daoju","t_dao","t_ju","btn_four_lb","shop_banner","btn_close","shop_show_info","btn_buy","bg_gold","bg_diamond","btn_diamond","btn_gold","lb_gold","lb_diamond","shop_show_icon"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this._Image2_i(),this._Image3_i(),this.res_scroller_i(),this.btn_fashion_i(),this.t_shi_i(),this.t_zhuang_i(),this.btn_one_lb_i(),this.btn_paopao_i(),this.t_pao1_i(),this.t_pao2_i(),this.btn_two_lb_i(),this.btn_texiao_i(),this.t_te_i(),this.t_xiao_i(),this.btn_three_lb_i(),this.btn_daoju_i(),this.t_dao_i(),this.t_ju_i(),this.btn_four_lb_i(),this.shop_banner_i(),this.btn_close_i(),this._Image4_i(),this._Image5_i(),this.shop_show_info_i(),this.btn_buy_i(),this.bg_gold_i(),this.bg_diamond_i(),this.btn_diamond_i(),this.btn_gold_i(),this.lb_gold_i(),this.lb_diamond_i(),this.shop_show_icon_i()];
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
		t.width = 1165.82;
		t.x = 84.23;
		t.y = 64.68;
		return t;
	};
	_proto._Image3_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 495.75;
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
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.91;
		t.label = "";
		t.name = "btn_close";
		t.width = 79.76;
		t.x = 1080.68;
		t.y = 105.31;
		t.skinName = LoginUI$Skin48;
		return t;
	};
	_proto._Image4_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 476.07;
		t.scale9Grid = new egret.Rectangle(11,9,109,112);
		t.source = "shop_bg_2_png";
		t.width = 288.18;
		t.x = 866.94;
		t.y = 200.48;
		return t;
	};
	_proto._Image5_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 235.15;
		t.scale9Grid = new egret.Rectangle(10,10,128,132);
		t.source = "shop_bg_3_png";
		t.width = 253.34;
		t.x = 884.38;
		t.y = 218.46;
		return t;
	};
	_proto.shop_show_info_i = function () {
		var t = new eui.Label();
		this.shop_show_info = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.bold = true;
		t.height = 133.33;
		t.name = "shop_show_info";
		t.size = 28;
		t.text = "品描述商描述商品描述商品描述商品描述商品描述";
		t.textAlign = "center";
		t.textColor = 0x9d6357;
		t.verticalAlign = "top";
		t.width = 242.8;
		t.x = 889.65;
		t.y = 465.83;
		return t;
	};
	_proto.btn_buy_i = function () {
		var t = new eui.Button();
		this.btn_buy = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 62.12;
		t.label = "购  买";
		t.name = "btn_buy";
		t.width = 183.33;
		t.x = 921.95;
		t.y = 603.79;
		t.skinName = LoginUI$Skin49;
		return t;
	};
	_proto.bg_gold_i = function () {
		var t = new eui.Image();
		this.bg_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "bg_gold";
		t.source = "mini_own";
		t.width = 160;
		t.x = 643.97;
		t.y = 5.04;
		return t;
	};
	_proto.bg_diamond_i = function () {
		var t = new eui.Image();
		this.bg_diamond = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 42;
		t.name = "bg_diamond";
		t.source = "mini_own";
		t.width = 160;
		t.x = 920.68;
		t.y = 8.52;
		return t;
	};
	_proto.btn_diamond_i = function () {
		var t = new eui.Button();
		this.btn_diamond = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_diamond";
		t.width = 58;
		t.x = 881.68;
		t.y = 3.04;
		t.skinName = LoginUI$Skin50;
		return t;
	};
	_proto.btn_gold_i = function () {
		var t = new eui.Button();
		this.btn_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 60;
		t.label = "";
		t.name = "btn_gold";
		t.width = 58;
		t.x = 595.24;
		t.y = -0.43;
		t.skinName = LoginUI$Skin51;
		return t;
	};
	_proto.lb_gold_i = function () {
		var t = new eui.Label();
		this.lb_gold = t;
		t.name = "lb_gold";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 712.33;
		t.y = 13.52;
		return t;
	};
	_proto.lb_diamond_i = function () {
		var t = new eui.Label();
		this.lb_diamond = t;
		t.name = "lb_diamond";
		t.text = "2222";
		t.textColor = 0x443F3F;
		t.x = 1000.68;
		t.y = 14.52;
		return t;
	};
	_proto.shop_show_icon_i = function () {
		var t = new eui.Image();
		this.shop_show_icon = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 195.76;
		t.name = "shop_show_icon";
		t.source = "mini_weili";
		t.width = 215.45;
		t.x = 904.94;
		t.y = 238;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RankGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["rank","name","desc","head","group_1"];
		
		this.height = 58;
		this.width = 808;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 57.58;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 807.58;
		t.x = 0.7;
		t.y = 0.66;
		t.elementsContent = [this._Image1_i(),this.rank_i(),this.name_i(),this.desc_i(),this._Image2_i(),this.head_i()];
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 51.83;
		t.source = "rank_data_normal_png";
		t.width = 798.79;
		t.x = 5.57;
		t.y = 2.84;
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
		t.textColor = 0x148CBA;
		t.width = 47.33;
		t.x = 47.62;
		t.y = 17.67;
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
		t.textColor = 0x148CBA;
		t.width = 164;
		t.x = 248.54;
		t.y = 15.54;
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
		t.text = "胜场 ： 8   胜率：40%";
		t.textColor = 0x148CBA;
		t.width = 292.79;
		t.x = 482.78;
		t.y = 19.2;
		return t;
	};
	_proto._Image2_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 38.67;
		t.source = "mini_head";
		t.width = 42.67;
		t.x = 189.98;
		t.y = 9.34;
		return t;
	};
	_proto.head_i = function () {
		var t = new eui.Image();
		this.head = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 33.34;
		t.name = "head";
		t.source = "mini_boom";
		t.width = 34.67;
		t.x = 192.69;
		t.y = 11.7;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RegisteUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin52 = 	(function (_super) {
		__extends(LoginUI$Skin52, _super);
		function LoginUI$Skin52() {
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
		var _proto = LoginUI$Skin52.prototype;

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
		return LoginUI$Skin52;
	})(eui.Skin);

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
		return LoginUI$Skin53;
	})(eui.Skin);

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
		return LoginUI$Skin54;
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
		t.skinName = LoginUI$Skin52;
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
		t.label = "";
		t.name = "btn_confirm_registe";
		t.x = 506.03;
		t.y = 450.33;
		t.skinName = LoginUI$Skin53;
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
		t.skinName = LoginUI$Skin54;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RoleInfoUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
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
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
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
		return LoginUI$Skin55;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["lb_life","lb_boom","lb_lv","lb_exp","lb_speed","lb_power","btn_close"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.lb_life_i(),this.lb_boom_i(),this._Label1_i(),this.lb_lv_i(),this.lb_exp_i(),this._Label2_i(),this.lb_speed_i(),this.lb_power_i(),this.btn_close_i()];
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
		t.y = 49.07;
		return t;
	};
	_proto.lb_life_i = function () {
		var t = new eui.Label();
		this.lb_life = t;
		t.name = "lb_life";
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x486b8f;
		t.verticalAlign = "middle";
		t.x = 596.04;
		t.y = 268.3;
		return t;
	};
	_proto.lb_boom_i = function () {
		var t = new eui.Label();
		this.lb_boom = t;
		t.name = "lb_boom";
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x486B8F;
		t.verticalAlign = "middle";
		t.x = 596.04;
		t.y = 326.78;
		return t;
	};
	_proto._Label1_i = function () {
		var t = new eui.Label();
		t.size = 30;
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
		t.text = "100";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.x = 502.39;
		t.y = 456.18;
		return t;
	};
	_proto.lb_exp_i = function () {
		var t = new eui.Label();
		this.lb_exp = t;
		t.name = "lb_exp";
		t.size = 30;
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
		t.name = "lb_speed";
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x486B8F;
		t.verticalAlign = "middle";
		t.x = 749.98;
		t.y = 268.3;
		return t;
	};
	_proto.lb_power_i = function () {
		var t = new eui.Label();
		this.lb_power = t;
		t.name = "lb_power";
		t.size = 22;
		t.text = "22";
		t.textAlign = "center";
		t.textColor = 0x486B8F;
		t.verticalAlign = "middle";
		t.x = 749.98;
		t.y = 326.78;
		return t;
	};
	_proto.btn_close_i = function () {
		var t = new eui.Button();
		this.btn_close = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.27;
		t.label = "";
		t.name = "btn_close";
		t.width = 70.67;
		t.x = 809.83;
		t.y = 118.94;
		t.skinName = LoginUI$Skin55;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RoleSelectUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
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
		return LoginUI$Skin59;
	})(eui.Skin);

	var LoginUI$Skin60 = 	(function (_super) {
		__extends(LoginUI$Skin60, _super);
		function LoginUI$Skin60() {
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
		var _proto = LoginUI$Skin60.prototype;

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
		return LoginUI$Skin60;
	})(eui.Skin);

	var LoginUI$Skin61 = 	(function (_super) {
		__extends(LoginUI$Skin61, _super);
		function LoginUI$Skin61() {
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
		var _proto = LoginUI$Skin61.prototype;

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
		return LoginUI$Skin61;
	})(eui.Skin);

	var LoginUI$Skin62 = 	(function (_super) {
		__extends(LoginUI$Skin62, _super);
		function LoginUI$Skin62() {
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
		var _proto = LoginUI$Skin62.prototype;

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
		return LoginUI$Skin62;
	})(eui.Skin);

	var LoginUI$Skin63 = 	(function (_super) {
		__extends(LoginUI$Skin63, _super);
		function LoginUI$Skin63() {
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
		var _proto = LoginUI$Skin63.prototype;

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
		return LoginUI$Skin63;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["select_role_bg","btn_close","img_buy_bg","lb_name","btn_gold","lb_gold","lb_attr","btn_shop","btn_shop0","btn_shop1","btn_shop2","lb_life","lb_boom","lb_speed","lb_power","scroll_group0","scroll0","fighting_parent","btn_buy","btn_fight","lb_role_click"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.select_role_bg_i(),this._Image1_i(),this.btn_close_i(),this.img_buy_bg_i(),this.lb_name_i(),this.btn_gold_i(),this.lb_gold_i(),this._Image2_i(),this._Label1_i(),this._Label2_i(),this.lb_attr_i(),this._Image3_i(),this._Image4_i(),this._Image5_i(),this._Image6_i(),this.btn_shop_i(),this.btn_shop0_i(),this.btn_shop1_i(),this.btn_shop2_i(),this._Label3_i(),this.lb_life_i(),this.lb_boom_i(),this.lb_speed_i(),this._Label4_i(),this._Label5_i(),this._Label6_i(),this.lb_power_i(),this.fighting_parent_i(),this.btn_buy_i(),this.btn_fight_i(),this.lb_role_click_i()];
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
		t.x = 667;
		t.y = -18.44;
		return t;
	};
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
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 69.27;
		t.label = "";
		t.name = "btn_close";
		t.width = 70.67;
		t.x = 26.66;
		t.y = 30.4;
		t.skinName = LoginUI$Skin56;
		return t;
	};
	_proto.img_buy_bg_i = function () {
		var t = new eui.Image();
		this.img_buy_bg = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 52;
		t.name = "img_buy_bg";
		t.source = "role_select_down_png";
		t.width = 294;
		t.x = 510.69;
		t.y = 571.97;
		return t;
	};
	_proto.lb_name_i = function () {
		var t = new eui.Label();
		this.lb_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.34;
		t.name = "lb_name";
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
		t.skinName = LoginUI$Skin57;
		return t;
	};
	_proto.lb_gold_i = function () {
		var t = new eui.Label();
		this.lb_gold = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 26.33;
		t.name = "lb_gold";
		t.size = 24;
		t.text = "2222";
		t.textColor = 0xfefcfe;
		t.width = 80.33;
		t.x = 578.57;
		t.y = 588.64;
		return t;
	};
	_proto._Image2_i = function () {
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
	_proto._Label1_i = function () {
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
	_proto._Label2_i = function () {
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
	_proto.lb_attr_i = function () {
		var t = new eui.Label();
		this.lb_attr = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 87.33;
		t.name = "lb_attr";
		t.size = 22;
		t.text = "描述文字描述文字描述文字描述文字描述文字描述文字描述文";
		t.textColor = 0x9d6357;
		t.width = 238;
		t.x = 1037.32;
		t.y = 533;
		return t;
	};
	_proto._Image3_i = function () {
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
	_proto._Image4_i = function () {
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
	_proto._Image5_i = function () {
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
	_proto._Image6_i = function () {
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
		t.skinName = LoginUI$Skin58;
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
		t.skinName = LoginUI$Skin59;
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
		t.skinName = LoginUI$Skin60;
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
		t.skinName = LoginUI$Skin61;
		return t;
	};
	_proto._Label3_i = function () {
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
	_proto.lb_life_i = function () {
		var t = new eui.Label();
		this.lb_life = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "lb_life";
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
	_proto.lb_boom_i = function () {
		var t = new eui.Label();
		this.lb_boom = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "lb_boom";
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
	_proto.lb_speed_i = function () {
		var t = new eui.Label();
		this.lb_speed = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "lb_speed";
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
	_proto._Label4_i = function () {
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
	_proto._Label5_i = function () {
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
	_proto._Label6_i = function () {
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
	_proto.lb_power_i = function () {
		var t = new eui.Label();
		this.lb_power = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 31.33;
		t.name = "lb_power";
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
		t.height = 56;
		t.label = "购  买";
		t.name = "btn_buy";
		t.width = 138;
		t.x = 719.69;
		t.y = 570.6;
		t.skinName = LoginUI$Skin62;
		return t;
	};
	_proto.btn_fight_i = function () {
		var t = new eui.Button();
		this.btn_fight = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 56;
		t.label = "出 战";
		t.name = "btn_fight";
		t.width = 138;
		t.x = 627.82;
		t.y = 570.6;
		t.skinName = LoginUI$Skin63;
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
		t.x = 539.24;
		t.y = 301.41;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/RoleSelectUIGroup.exml'] = window.NoticeGroup = (function (_super) {
	__extends(NoticeGroup, _super);
	function NoticeGroup() {
		_super.call(this);
		this.skinParts = ["role_head","role_name","img_selected","group_1"];
		
		this.height = 113;
		this.width = 341;
		this.elementsContent = [this.group_1_i()];
	}
	var _proto = NoticeGroup.prototype;

	_proto.group_1_i = function () {
		var t = new eui.Group();
		this.group_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 111.91;
		t.name = "group_1";
		t.scaleX = 1;
		t.scaleY = 1;
		t.width = 340.91;
		t.x = 0.7;
		t.y = -1.34;
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
		t.width = 335;
		t.x = 3;
		t.y = 4;
		return t;
	};
	_proto.role_name_i = function () {
		var t = new eui.Label();
		this.role_name = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
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
		t.width = 330;
		t.x = 3;
		t.y = 4;
		return t;
	};
	return NoticeGroup;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/SaveMapTipUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
	var LoginUI$Skin64 = 	(function (_super) {
		__extends(LoginUI$Skin64, _super);
		function LoginUI$Skin64() {
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
		var _proto = LoginUI$Skin64.prototype;

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
		return LoginUI$Skin64;
	})(eui.Skin);

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
		return LoginUI$Skin65;
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
		t.source = "LoginTexture_json.Img_toubiao_png";
		t.width = 659.88;
		t.x = 337.06;
		t.y = 127.3;
		return t;
	};
	_proto.btn_close_edit_i = function () {
		var t = new eui.Button();
		this.btn_close_edit = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 67.33;
		t.label = "";
		t.name = "btn_close_edit";
		t.width = 68.33;
		t.x = 962.78;
		t.y = 108.85;
		t.skinName = LoginUI$Skin64;
		return t;
	};
	_proto.lb_edit_title_i = function () {
		var t = new eui.Label();
		this.lb_edit_title = t;
		t.name = "lb_edit_title";
		t.size = 28;
		t.text = "保存地图";
		t.textColor = 0xefba1c;
		t.x = 615.07;
		t.y = 162.18;
		return t;
	};
	_proto.btn_confirm_modify_i = function () {
		var t = new eui.Button();
		this.btn_confirm_modify = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 44;
		t.label = "";
		t.name = "btn_confirm_modify";
		t.width = 102;
		t.x = 615.07;
		t.y = 492.78;
		t.skinName = LoginUI$Skin65;
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
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
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
						new eui.SetProperty("_Image1","source","btn_type2_2_png")
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
		return LoginUI$Skin67;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","btn_close","btn_random","btn_mymap","btn_certain_map","img_left","img_right"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_platform_i(),this.btn_close_i(),this.btn_random_i(),this.btn_mymap_i(),this.btn_certain_map_i(),this._Label1_i(),this.img_left_i(),this.img_right_i()];
	}
	var _proto = LoginUI.prototype;

	_proto.fighting_platform_i = function () {
		var t = new eui.Image();
		this.fighting_platform = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 579.88;
		t.name = "fighting_platform";
		t.scale9Grid = new egret.Rectangle(25,25,150,150);
		t.source = "fighting_kuang_png";
		t.width = 1071.69;
		t.x = 131.15;
		t.y = 105.54;
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
		t.x = 1142.96;
		t.y = 88.55;
		t.skinName = LoginUI$Skin66;
		return t;
	};
	_proto.btn_random_i = function () {
		var t = new eui.Image();
		this.btn_random = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 332.12;
		t.name = "btn_random";
		t.source = "btn_random_map_png";
		t.width = 348.79;
		t.x = 277.03;
		t.y = 229.42;
		return t;
	};
	_proto.btn_mymap_i = function () {
		var t = new eui.Image();
		this.btn_mymap = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 332.12;
		t.name = "btn_mymap";
		t.source = "btn_diy_map_png";
		t.width = 348.79;
		t.x = 706.73;
		t.y = 229.42;
		return t;
	};
	_proto.btn_certain_map_i = function () {
		var t = new eui.Button();
		this.btn_certain_map = t;
		t.anchorOffsetX = 0;
		t.label = "确  定";
		t.name = "btn_certain_map";
		t.width = 198.24;
		t.x = 577.88;
		t.y = 565.54;
		t.skinName = LoginUI$Skin67;
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
		t.textColor = 0x7479db;
		t.width = 484.61;
		t.x = 457.5;
		t.y = 172.56;
		return t;
	};
	_proto.img_left_i = function () {
		var t = new eui.Image();
		this.img_left = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.76;
		t.name = "img_left";
		t.source = "sevent_got_png";
		t.width = 62.73;
		t.x = 529;
		t.y = 482;
		return t;
	};
	_proto.img_right_i = function () {
		var t = new eui.Image();
		this.img_right = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 55.76;
		t.name = "img_right";
		t.source = "sevent_got_png";
		t.visible = false;
		t.width = 62.73;
		t.x = 969;
		t.y = 482;
		return t;
	};
	return LoginUI;
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/SeventDayGet.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
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
						new eui.SetProperty("_Image1","source","btn_yellow_2_png")
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
		return LoginUI$Skin68;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["shop_banner0","shop_banner4","item_icon_1","shop_banner22","item_state_1","shop_banner","shop_banner1","shop_banner5","shop_banner6","shop_banner7","shop_banner2","shop_banner3","shop_banner25","btn_close","item_icon_2","item_state_2","item_icon_3","item_state_3","item_icon_4","item_state_4","item_icon_5","item_state_5","item_icon_6","item_state_6","item_icon_7","item_state_7","lb_name_1","lb_name_2","lb_name_3","lb_name_4","lb_name_5","lb_name_6","lb_name_7","shop_banner23","shop_banner26","shop_banner27","shop_banner28","shop_banner24","item_lb_1","item_lb_2","item_lb_3","item_lb_4","item_lb_5","item_lb_6","item_lb_7"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this._Image1_i(),this.shop_banner0_i(),this.shop_banner4_i(),this.item_icon_1_i(),this.shop_banner22_i(),this.item_state_1_i(),this.shop_banner_i(),this.shop_banner1_i(),this.shop_banner5_i(),this.shop_banner6_i(),this.shop_banner7_i(),this.shop_banner2_i(),this.shop_banner3_i(),this.shop_banner25_i(),this.btn_close_i(),this.item_icon_2_i(),this.item_state_2_i(),this.item_icon_3_i(),this.item_state_3_i(),this.item_icon_4_i(),this.item_state_4_i(),this.item_icon_5_i(),this.item_state_5_i(),this.item_icon_6_i(),this.item_state_6_i(),this.item_icon_7_i(),this.item_state_7_i(),this.lb_name_1_i(),this.lb_name_2_i(),this.lb_name_3_i(),this.lb_name_4_i(),this.lb_name_5_i(),this.lb_name_6_i(),this.lb_name_7_i(),this.shop_banner23_i(),this.shop_banner26_i(),this.shop_banner27_i(),this.shop_banner28_i(),this.shop_banner24_i(),this.item_lb_1_i(),this.item_lb_2_i(),this.item_lb_3_i(),this.item_lb_4_i(),this.item_lb_5_i(),this.item_lb_6_i(),this.item_lb_7_i()];
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
		t.scale9Grid = new egret.Rectangle(10,10,229,219);
		t.source = "sevent_bg_png";
		t.width = 1244.01;
		t.x = 50.55;
		t.y = 230.36;
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
		t.x = 72.64;
		t.y = 316.68;
		return t;
	};
	_proto.item_icon_1_i = function () {
		var t = new eui.Image();
		this.item_icon_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.33;
		t.name = "item_icon_1";
		t.source = "barr_ball_png";
		t.width = 75.34;
		t.x = 111.97;
		t.y = 360.85;
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
		t.x = 90.96;
		t.y = 483.14;
		return t;
	};
	_proto.item_state_1_i = function () {
		var t = new eui.Image();
		this.item_state_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.name = "item_state_1";
		t.source = "sevent_got_png";
		t.width = 42.01;
		t.x = 166.3;
		t.y = 398.15;
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
		t.x = 409;
		t.y = 149.35;
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
		t.width = 154;
		t.x = 594.21;
		t.y = 316.68;
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
		t.x = 768.34;
		t.y = 315.35;
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
		t.x = 943;
		t.y = 313.98;
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
		t.x = 1118.32;
		t.y = 312.69;
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
		t.x = 245.69;
		t.y = 316.65;
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
		t.x = 419.69;
		t.y = 316.68;
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
		t.x = 262.69;
		t.y = 483.14;
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
		t.x = 1239.32;
		t.y = 218.35;
		t.skinName = LoginUI$Skin68;
		return t;
	};
	_proto.item_icon_2_i = function () {
		var t = new eui.Image();
		this.item_icon_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.33;
		t.name = "item_icon_2";
		t.source = "barr_ball_png";
		t.width = 75.34;
		t.x = 283.69;
		t.y = 360.83;
		return t;
	};
	_proto.item_state_2_i = function () {
		var t = new eui.Image();
		this.item_state_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.name = "item_state_2";
		t.source = "sevent_get_png";
		t.width = 42.01;
		t.x = 338.02;
		t.y = 398.13;
		return t;
	};
	_proto.item_icon_3_i = function () {
		var t = new eui.Image();
		this.item_icon_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.33;
		t.name = "item_icon_3";
		t.source = "barr_ball_png";
		t.width = 75.34;
		t.x = 459.02;
		t.y = 364.85;
		return t;
	};
	_proto.item_state_3_i = function () {
		var t = new eui.Image();
		this.item_state_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.name = "item_state_3";
		t.source = "sevent_get_png";
		t.width = 42.01;
		t.x = 513.35;
		t.y = 402.15;
		return t;
	};
	_proto.item_icon_4_i = function () {
		var t = new eui.Image();
		this.item_icon_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.33;
		t.name = "item_icon_4";
		t.source = "barr_ball_png";
		t.width = 75.34;
		t.x = 629.33;
		t.y = 362.97;
		return t;
	};
	_proto.item_state_4_i = function () {
		var t = new eui.Image();
		this.item_state_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.name = "item_state_4";
		t.source = "sevent_get_png";
		t.width = 42.01;
		t.x = 683.66;
		t.y = 400.27;
		return t;
	};
	_proto.item_icon_5_i = function () {
		var t = new eui.Image();
		this.item_icon_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.33;
		t.name = "item_icon_5";
		t.source = "barr_ball_png";
		t.width = 75.34;
		t.x = 807.67;
		t.y = 360.83;
		return t;
	};
	_proto.item_state_5_i = function () {
		var t = new eui.Image();
		this.item_state_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.name = "item_state_5";
		t.source = "sevent_get_png";
		t.width = 42.01;
		t.x = 862;
		t.y = 398.13;
		return t;
	};
	_proto.item_icon_6_i = function () {
		var t = new eui.Image();
		this.item_icon_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.33;
		t.name = "item_icon_6";
		t.source = "barr_ball_png";
		t.width = 75.34;
		t.x = 982.33;
		t.y = 360.83;
		return t;
	};
	_proto.item_state_6_i = function () {
		var t = new eui.Image();
		this.item_state_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.name = "item_state_6";
		t.source = "sevent_get_png";
		t.width = 42.01;
		t.x = 1036.66;
		t.y = 398.13;
		return t;
	};
	_proto.item_icon_7_i = function () {
		var t = new eui.Image();
		this.item_icon_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 70.33;
		t.name = "item_icon_7";
		t.source = "barr_ball_png";
		t.width = 75.34;
		t.x = 1154.52;
		t.y = 360.83;
		return t;
	};
	_proto.item_state_7_i = function () {
		var t = new eui.Image();
		this.item_state_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 37;
		t.name = "item_state_7";
		t.source = "sevent_get_png";
		t.width = 42.01;
		t.x = 1208.85;
		t.y = 398.13;
		return t;
	};
	_proto.lb_name_1_i = function () {
		var t = new eui.Label();
		this.lb_name_1 = t;
		t.name = "lb_name_1";
		t.size = 20;
		t.text = "物品名字名字";
		t.textAlign = "center";
		t.textColor = 0xfefcfe;
		t.verticalAlign = "middle";
		t.x = 91.62;
		t.y = 449.81;
		return t;
	};
	_proto.lb_name_2_i = function () {
		var t = new eui.Label();
		this.lb_name_2 = t;
		t.name = "lb_name_2";
		t.size = 20;
		t.text = "物品名字名字";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.x = 262.69;
		t.y = 449.81;
		return t;
	};
	_proto.lb_name_3_i = function () {
		var t = new eui.Label();
		this.lb_name_3 = t;
		t.name = "lb_name_3";
		t.size = 20;
		t.text = "物品名字名字";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.x = 436.69;
		t.y = 449.81;
		return t;
	};
	_proto.lb_name_4_i = function () {
		var t = new eui.Label();
		this.lb_name_4 = t;
		t.name = "lb_name_4";
		t.size = 20;
		t.text = "物品名字名字";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.x = 611.21;
		t.y = 449.81;
		return t;
	};
	_proto.lb_name_5_i = function () {
		var t = new eui.Label();
		this.lb_name_5 = t;
		t.name = "lb_name_5";
		t.size = 20;
		t.text = "物品名字名字";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.x = 785.34;
		t.y = 448.48;
		return t;
	};
	_proto.lb_name_6_i = function () {
		var t = new eui.Label();
		this.lb_name_6 = t;
		t.name = "lb_name_6";
		t.size = 20;
		t.text = "物品名字名字";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.x = 960;
		t.y = 447.15;
		return t;
	};
	_proto.lb_name_7_i = function () {
		var t = new eui.Label();
		this.lb_name_7 = t;
		t.name = "lb_name_7";
		t.size = 20;
		t.text = "物品名字名字";
		t.textAlign = "center";
		t.textColor = 0xFEFCFE;
		t.verticalAlign = "middle";
		t.x = 1135.32;
		t.y = 445.82;
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
		t.x = 608.21;
		t.y = 483.14;
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
		t.x = 785.34;
		t.y = 483.14;
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
		t.x = 960;
		t.y = 483.14;
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
		t.x = 1135.32;
		t.y = 483.14;
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
		t.x = 436.69;
		t.y = 483.14;
		return t;
	};
	_proto.item_lb_1_i = function () {
		var t = new eui.Label();
		this.item_lb_1 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 251.21;
		t.name = "item_lb_1";
		t.text = "";
		t.width = 169.45;
		t.x = 66.91;
		t.y = 320.21;
		return t;
	};
	_proto.item_lb_2_i = function () {
		var t = new eui.Label();
		this.item_lb_2 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 251.21;
		t.name = "item_lb_2";
		t.text = "";
		t.width = 169.45;
		t.x = 238.3;
		t.y = 322.87;
		return t;
	};
	_proto.item_lb_3_i = function () {
		var t = new eui.Label();
		this.item_lb_3 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 251.21;
		t.name = "item_lb_3";
		t.text = "";
		t.width = 169.45;
		t.x = 412.3;
		t.y = 316.65;
		return t;
	};
	_proto.item_lb_4_i = function () {
		var t = new eui.Label();
		this.item_lb_4 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 251.21;
		t.name = "item_lb_4";
		t.text = "";
		t.width = 169.45;
		t.x = 587.83;
		t.y = 311.66;
		return t;
	};
	_proto.item_lb_5_i = function () {
		var t = new eui.Label();
		this.item_lb_5 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 251.21;
		t.name = "item_lb_5";
		t.text = "";
		t.width = 169.45;
		t.x = 760.95;
		t.y = 311.67;
		return t;
	};
	_proto.item_lb_6_i = function () {
		var t = new eui.Label();
		this.item_lb_6 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 251.21;
		t.name = "item_lb_6";
		t.text = "";
		t.width = 169.45;
		t.x = 935.61;
		t.y = 316.68;
		return t;
	};
	_proto.item_lb_7_i = function () {
		var t = new eui.Label();
		this.item_lb_7 = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 251.21;
		t.name = "item_lb_7";
		t.text = "";
		t.width = 169.45;
		t.x = 1110.93;
		t.y = 315.35;
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
		t.height = 106;
		t.name = "shop_item_icon";
		t.source = "mini_speed";
		t.width = 131;
		t.x = 25;
		t.y = 58;
		return t;
	};
	_proto.shop_item_name_i = function () {
		var t = new eui.Label();
		this.shop_item_name = t;
		t.name = "shop_item_name";
		t.size = 20;
		t.text = "运动健将运";
		t.textAlign = "center";
		t.textColor = 0xfefcfe;
		t.x = 40;
		t.y = 19;
		return t;
	};
	_proto.shop_item_money_i = function () {
		var t = new eui.Label();
		this.shop_item_money = t;
		t.name = "shop_item_money";
		t.size = 22;
		t.text = "2500";
		t.textColor = 0xFEFCFE;
		t.x = 75.5;
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
})(eui.Skin);generateEUI.paths['resource/eui_skins/UserUI/WxVsWaitUI.exml'] = window.LoginUI = (function (_super) {
	__extends(LoginUI, _super);
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
		return LoginUI$Skin69;
	})(eui.Skin);

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
		return LoginUI$Skin71;
	})(eui.Skin);

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
						new eui.SetProperty("_Image1","source","btn_type2_2_png")
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
		return LoginUI$Skin72;
	})(eui.Skin);

	function LoginUI() {
		_super.call(this);
		this.skinParts = ["fighting_platform","btn_info","img_lefthead","btn_info0","img_righthead","left_name","btn_close_wx_vs","left_online","right_online","btn_start","right_name","img_wx_wenhao","left_ready","right_ready"];
		
		this.height = 750;
		this.width = 1334;
		this.elementsContent = [this.fighting_platform_i(),this._Image1_i(),this.btn_info_i(),this.img_lefthead_i(),this.btn_info0_i(),this.img_righthead_i(),this.left_name_i(),this.btn_close_wx_vs_i(),this.left_online_i(),this.right_online_i(),this.btn_start_i(),this.right_name_i(),this.img_wx_wenhao_i(),this._Image2_i(),this._Image3_i(),this.left_ready_i(),this.right_ready_i()];
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
		t.width = 1295.33;
		t.x = 23.01;
		t.y = 18.35;
		return t;
	};
	_proto._Image1_i = function () {
		var t = new eui.Image();
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 405;
		t.source = "vs_head_1v1_png";
		t.width = 1325;
		t.x = 0;
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
		t.skinName = LoginUI$Skin69;
		return t;
	};
	_proto.img_lefthead_i = function () {
		var t = new eui.Image();
		this.img_lefthead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.82;
		t.name = "img_lefthead";
		t.source = "HallTexture_json.head_8_png";
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
		t.skinName = LoginUI$Skin70;
		return t;
	};
	_proto.img_righthead_i = function () {
		var t = new eui.Image();
		this.img_righthead = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 80.82;
		t.name = "img_righthead";
		t.source = "HallTexture_json.head_8_png";
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
	_proto.btn_close_wx_vs_i = function () {
		var t = new eui.Button();
		this.btn_close_wx_vs = t;
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 82.91;
		t.label = "";
		t.name = "btn_close_wx_vs";
		t.width = 79.76;
		t.x = 38.26;
		t.y = 39.89;
		t.skinName = LoginUI$Skin71;
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
		t.anchorOffsetX = 0;
		t.anchorOffsetY = 0;
		t.height = 74;
		t.label = "开  始";
		t.name = "btn_start";
		t.width = 166;
		t.x = 559.76;
		t.y = 598.33;
		t.skinName = LoginUI$Skin72;
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
		t.text = "名字2";
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
		t.height = 370;
		t.name = "img_wx_wenhao";
		t.source = "vs_randon_1v1_png";
		t.width = 449;
		t.x = 438;
		t.y = 179;
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
		t.width = 110;
		t.x = 262;
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
		t.textColor = 0x46c7fc;
		t.width = 110;
		t.x = 977.65;
		t.y = 540.5;
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