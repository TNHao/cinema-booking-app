export class selectorOptions {
    constructor(inputLabel, inputProps, data, styles = {}, valueKey="value", optionKey="option") {
        this.inputLabel = inputLabel;
        this.inputProps = inputProps;
        this.data = data;
        this.valueKey = valueKey;
        this.optionKey = optionKey;
        this.styles = styles;
    }
}