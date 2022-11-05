import { _decorator, Component, Node, UISystem, UIDocument, UIElement, Rect, Color } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('ui_frame')
export class ui_frame extends Component {

    uiDoc = new UIDocument();
    uiElement = new UIElement();

    onload () {
        
    }

    start() {
        UISystem.instance.addDocument(this.uiDoc);
        let rect =  this.uiElement.layout = new Rect(0, 0, 100, 100);
        let color = Color.WHITE;
        this.uiDoc.renderSubSystem.context.drawRect(rect, color);
    }

    update(deltaTime: number) {
        
    }
}


