class MobileComponent {}
class IOSComponent extends MobileComponent {}
class AndroidComponent extends MobileComponent {}
class UbuntuComponent extends MobileComponent {}

class ComponentFactory {
    public static generateComponent(os: string): MobileComponent {
        switch (os) {
            case 'IOS':
                return new IOSComponent();

            case 'Android':
                return new AndroidComponent();

            case 'Ubuntu':
                return new UbuntuComponent();
                
            default:
                return new MobileComponent();
        }
    }
}

const newComponent = ComponentFactory.generateComponent('IOS');
