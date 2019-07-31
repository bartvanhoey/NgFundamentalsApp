import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-collapsible-well',
    templateUrl: './collapsible-well.component.html'
})

export class CollapsibleWellComponent {
    @Input() title: string;
    visible = true;

    toggleContent() {
        this.visible = !this.visible;
    }


}