class PostService {
    public getList() {
        // return list
    }
}

class ComponentList {
    constructor(private _postService: PostService) {

    }
}


// injector
class Injector {
    private _container = new Map();

    constructor(private _providers: any[] = []) {
        this._providers.forEach(service => this._container.set(service, new service()));
    }

    public get(service: any) {
        const serviceInstance = this._container.get(service);
        if (!serviceInstance) {
            throw new Error(`Service ${service} not found in (RootInjector)`);
        }
        return serviceInstance;
    }
}
