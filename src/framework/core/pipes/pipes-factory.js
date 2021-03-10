class PipesFactory{
   constructor(){
      this.pipes = {}
   }
   registerPipe(pipe){
      this.pipes[pipe.name] = pipe
   }
}
export const pipesFactory = new PipesFactory()
