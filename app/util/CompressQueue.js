import imageCompression from 'browser-image-compression';

let instance;

export class CompressQueue {

    #queue
    #setState

    constructor(){
        if (instance) {
            return instance;
        }

        instance = this
        // this.#callback = callback
        this.#queue = []
    }

    async #exec(){
        while(this.#queue.length > 0){
            const resizingBlob = await imageCompression(this.#queue[0][0].data, { maxSizeMB: 0.1 });
            const resizingFile = new File([resizingBlob], this.#queue[0][0].name, { type: this.#queue[0][0].data.type });
            this.#queue[0][1]({
                ...this.#queue[0][0],
                data: resizingFile, 
                name: this.#queue[0][0].name,
                size: resizingFile.size
            }) // exec callback
            this.#queue.shift()
            this.#setState(this.isEmpty())
        }
    }

    add(file, callback){
        if(this.#queue.length == 0) {
            this.#queue.push([file, callback])
            this.#exec()
        }else {
            this.#queue.push([file, callback])
        }
        this.#setState(this.isEmpty())
    }

    isEmpty(){
        return this.#queue.length == 0
    }

    setSubscriber(setState){
        this.#setState = setState
    }
    
}