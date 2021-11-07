import { UserFactory } from "./user.factory";
import { IBaseUser } from "./user.model";

class App {
    constructor() {
        this.init();
    }

    public init(): void {
        const formElem: HTMLFormElement = document.getElementById('user-form') as HTMLFormElement;
        const userName: HTMLElement = document.querySelector('#user-name strong');
        const userId: HTMLElement = document.querySelector('#user-id strong');
        const userType: HTMLElement = document.querySelector('#user-type strong');
        const userDate: HTMLElement = document.querySelector('#user-date strong');
        const factory = new UserFactory();

        formElem.addEventListener('submit', (e: Event) => {
            e.preventDefault();
            const formData = new FormData(formElem);
            const type: string = formData.get('type') as string;
            const name: string = formData.get('name') as string;
            const user: IBaseUser = factory.create(type, name);

            console.log(user)

            userName.innerHTML = user.name;
            userId.innerHTML = user.id;
            userType.innerHTML = user.type;
            userDate.innerHTML = user.created + '';
        });
    }
}

window.onload = (event: Event) => {
    new App();
};

