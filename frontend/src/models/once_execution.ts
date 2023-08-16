export default class OnlyOneExecutionGuard {
    private was_execute: boolean;

    public constructor() { 
        this.was_execute = false;
    }

    private try_run() : boolean {
        return !this.was_execute
    }

    public run() : boolean {
        if (this.try_run()){
            this.was_execute = true;
            return true;
        }
       
        return false;
    }

}