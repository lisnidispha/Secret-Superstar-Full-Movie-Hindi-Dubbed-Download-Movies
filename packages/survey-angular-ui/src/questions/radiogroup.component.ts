import { Component, Input } from "@angular/core";
import { AngularComponentFactory } from "../component-factory";
import { SurveyModel, PageModel } from "survey-core";
import { ImplementorBase } from "../implementor-base";

@Component({
  selector: "radiogroup-question",
  templateUrl: "./radiogroup.component.html",
  styleUrls: ["./radiogroup.component.scss"]
})
export class RadiogroupComponent {
  @Input() model: any;
  constructor() {
  }
  ngOnChanges(changes: any): void {
    new ImplementorBase(changes.model.currentValue);
  }
}

AngularComponentFactory.Instance.registerComponent("radiogroup-question", RadiogroupComponent);