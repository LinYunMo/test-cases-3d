import { _decorator, Component, Node, UISystem, UIDocument, UIElement, Rect, Color, Vec3 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ui_frame')
export class ui_frame extends Component {

    uiDoc = new UIDocument();
    uiElement = new UIElement();
    uiE2 = new UIElement();

    onload () {
        
    }

    start() {
        UISystem.instance.addDocument(this.uiDoc);
        let rect =  this.uiElement.layout = new Rect(50, 50, 100, 100);
        // this.uiElement.position = new Vec3(100, 100, 0);
        let color = Color.WHITE;
        this.uiDoc.window.addChild(this.uiElement);
        this.uiDoc.renderSubSystem.context.paint(this.uiElement);
        this.uiDoc.renderSubSystem.context.drawRect(rect, color);

        // rect =  this.uiE2.layout = new Rect(-50, -50, 200, 200);
        // color = Color.BLUE;
        // this.uiDoc.window.addChild(this.uiE2);
        // this.uiDoc.renderSubSystem.context.paint(this.uiE2);
        // this.uiDoc.renderSubSystem.context.drawRect(rect, color);
    }

    update(deltaTime: number) {
        
    }
}

