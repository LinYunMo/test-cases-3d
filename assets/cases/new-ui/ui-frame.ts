import { _decorator, Component, Node, UISystem, UIDocument, UIElement, Rect, Color, Vec3, UIBrush, Texture2D, Image, Material, Vec4 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ui_frame')
export class ui_frame extends Component {

    @property
    public startTime = 2;
    @property
    public intervalTime = 2;
    @property({
        type: Material
    })
    public material : Material = null!;

    cha : boolean = false;

    color = new Vec4(1, 1, 1, 1);

    @property({type: Texture2D})
    public texture : Texture2D = null!;

    uiDoc = new UIDocument();
    uiElement = new UIElement();
    uiE2 = new UIElement();

    image = new Image();
    brush = new UIBrush();

    onload () {
        
    }

    start() {
        UISystem.instance.addDocument(this.uiDoc);
        // let rect =  this.uiElement.layout = new Rect(50, 50, 100, 100);
        // // this.uiElement.position = new Vec3(100, 100, 0);
        // let color = Color.WHITE;
        // this.uiDoc.window.addChild(this.uiElement); // 只能一次？
        // this.uiDoc.renderSubSystem.context.paint(this.uiElement);
        // this.uiDoc.renderSubSystem.context.drawRect(rect, color);

        // rect =  this.uiE2.layout = new Rect(-50, -50, 100, 100);
        // color = Color.BLUE;
        // this.uiDoc.window.addChild(this.uiE2);
        // this.uiDoc.renderSubSystem.context.paint(this.uiE2);
        // this.uiDoc.renderSubSystem.context.drawRect(rect, color);


        // Image
        // this.uiDoc.window.addChild(this.image);
        // this.brush.width = 100;
        // this.brush.height = 100;
        // this.brush.tintColor = new Color(255, 0, 0, 255);
        // this.image.source = this.brush;

        // Image texture test
        // this.uiDoc.window.addChild(this.image);
        // this.brush.width = 100;
        // this.brush.height = 100;
        // this.brush.tintColor = new Color(255, 0, 0, 255);
        // this.brush.type = 1;
        // this.brush.texture = this.texture;
        // this.image.source = this.brush;

        // Image material test
        this.uiDoc.window.addChild(this.image);
        this.brush.width = 100;
        this.brush.height = 100;
        this.brush.tintColor = new Color(255, 255, 255, 255);
        this.brush.type = 4;
        // this.material.setProperty('mainTexture', this.texture);
        this.brush.material = this.material;
        this.image.source = this.brush;

        this.schedule(this.changeUni, this.intervalTime, 1000, this.startTime);
    }

    update(deltaTime: number) {
        
    }

    changeUni () {
        if (this.cha) {
            this.color.set(1,1,0,1);
        } else {
            this.color.set(1,1,1,1);
        }
        this.material.setProperty('mainColor',this.color);
        this.cha = !this.cha;
    }
}

