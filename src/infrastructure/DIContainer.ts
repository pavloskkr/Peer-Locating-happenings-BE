import {Container} from "inversify";
import {IUserRepository} from "../domain/interfaces/IUserRepository";
import {UserRepository} from "./repositories/UserRepository";
import {IHappeningRepository} from "../domain/interfaces/IHappeningRepository";
import {HappeningRepository} from "./repositories/HappeningRepository";
import {HappeningController} from "../interface/controllers/HappeningController";
import {UserController} from "../interface/controllers/UserController";
import {CreateHappeningUseCase} from "../use-cases/happenings/CreateHappeningUseCase";
import {DeleteHappeningUseCase} from "../use-cases/happenings/DeleteHappeningUseCase";
import {FindAllHappeningsUseCase} from "../use-cases/happenings/FindAllHappeningsUseCase";
import {FindHappeningByIdUseCase} from "../use-cases/happenings/FindHappeningByIdUseCase";
import {FindHappeningsByDateUseCase} from "../use-cases/happenings/FindHappeningsByDateUseCase";
import {FindHappeningsByEventTypeUseCase} from "../use-cases/happenings/FindHappeningsByEventTypeUseCase";
import {FindHappeningsByUserUseCase} from "../use-cases/happenings/FindHappeningsByUserUseCase";
import {UpdateHappeningUseCase} from "../use-cases/happenings/UpdateHappeningUseCase";
import {CreateUserUseCase} from "../use-cases/users/CreateUserUseCase";
import {DeleteUserUseCase} from "../use-cases/users/DeleteUserUseCase";
import {FindUserByFirebaseUidUseCase} from "../use-cases/users/FindUserByFirebaseUidUseCase";
import {FindUserByIdUseCase} from "../use-cases/users/FindUserByIdUseCase";
import {GetAllUsersUseCase} from "../use-cases/users/GetAllUsersUseCase";
import {UpdateUserUseCase} from "../use-cases/users/UpdateUserUseCase";

const DIContainer = new Container();

DIContainer.bind<IUserRepository>('IUserRepository').to(UserRepository);
DIContainer.bind<IHappeningRepository>('IHappeningRepository').to(HappeningRepository);

DIContainer.bind<HappeningController>(HappeningController).toSelf();
DIContainer.bind<UserController>(UserController).toSelf();

DIContainer.bind<CreateHappeningUseCase>(CreateHappeningUseCase).toSelf();
DIContainer.bind<DeleteHappeningUseCase>(DeleteHappeningUseCase).toSelf();
DIContainer.bind<FindAllHappeningsUseCase>(FindAllHappeningsUseCase).toSelf();
DIContainer.bind<FindHappeningByIdUseCase>(FindHappeningByIdUseCase).toSelf();
DIContainer.bind<FindHappeningsByDateUseCase>(FindHappeningsByDateUseCase).toSelf();
DIContainer.bind<FindHappeningsByEventTypeUseCase>(FindHappeningsByEventTypeUseCase).toSelf();
DIContainer.bind<FindHappeningsByUserUseCase>(FindHappeningsByUserUseCase).toSelf();
DIContainer.bind<UpdateHappeningUseCase>(UpdateHappeningUseCase).toSelf();

// Bind User use-cases
DIContainer.bind<CreateUserUseCase>(CreateUserUseCase).toSelf();
DIContainer.bind<DeleteUserUseCase>(DeleteUserUseCase).toSelf();
DIContainer.bind<FindUserByFirebaseUidUseCase>(FindUserByFirebaseUidUseCase).toSelf();
DIContainer.bind<FindUserByIdUseCase>(FindUserByIdUseCase).toSelf();
DIContainer.bind<GetAllUsersUseCase>(GetAllUsersUseCase).toSelf();
DIContainer.bind<UpdateUserUseCase>(UpdateUserUseCase).toSelf();

export { DIContainer };
