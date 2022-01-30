<!-- explain the difference between synchronous and asynchronous reading of files -->
## Difference

### Synchronous reading of file happens one after another while asynchronous reading is handled by node js to be performed asynchronously.

### Synchronous file reading can be used when next operation depends on current read and we don't want a callback.

### Async file reading can result into callback hell.

## what are the benefits of async

### Synchronous reading of files stop the flow of program and in cases of large files it can feel like that program is stuck.

### Synchronous reading of files can memory issues in case of really large files.
  
### Async reading solve above problems.