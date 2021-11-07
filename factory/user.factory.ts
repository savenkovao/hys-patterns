import { IBaseUser, UserType } from "./user.model";
import { Admin, Editor, Visitor } from "./user.constructors";

export class UserFactory {

    public create (
        type: string,
        name: string
    ): IBaseUser {
        let user: IBaseUser;

        switch (type) {
            case UserType.Admin: {
                user = new Admin(name)
            }
                break;

            case UserType.Editor: {
                user = new Editor(name)
            }
                break;

            default: {
                user = new Visitor(name)
            }
        }

        return user;
    }
}