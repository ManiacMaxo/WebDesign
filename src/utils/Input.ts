export class Input {
    constructor(
        public name: string,
        public type: string,
        public placeholder: string = null,
        public style: string = '',
        public required: boolean = true
    ) {
        this.name = name
        this.type = type
        this.placeholder = placeholder ? placeholder : this.name
        this.style = style
        this.required = required
    }
}
