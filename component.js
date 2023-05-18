export class Component {
  constructor(options) {
    this.document = options.shadowDom;
    this.arg1 = this.document.getElementById("arg1");
    this.arg2 = this.document.getElementById("arg2");
    this.initPromise = this.init();
  }

  async init() {
    await uiBuilder.ready(this.arg1);
    await uiBuilder.ready(this.arg2);
    await this.arg1.component.inputDefinition({
      type: "number",
      name: "Min",
      placeholder: "Number",
      value: 0,
    });

    await this.arg2.component.inputDefinition({
      type: "number",
      name: "Max",
      placeholder: "Number",
      value: 100,
    });
  }

  setConfig(config) {
    this.config = config;
  }

  async setValue(value) {
    await this.initPromise;
    await this.arg1.component.setValue(value.min);
    await this.arg2.component.setValue(value.max);
  }

  async getValue() {
    return {
      evaluate: true,
      min: await this.arg1.component.getValue(),
      max: await this.arg2.component.getValue(),
      type: "random",
    };
  }
}
