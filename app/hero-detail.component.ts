import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

import {Hero} from './hero';
import {HeroService} from './hero.service';

@Component({
	moduleId: module.id,
	selector: 'my-hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;
	@Input() id: number;

	constructor(
		private heroService: HeroService,
		private route: ActivatedRoute
	) {}

	ngOnInit(): void {
		this.route.params.forEach((params: Params) => {
			let id = +params['id'];	//	convert to number
			this.heroService.getHero(id)
				.then(returnedHero => this.hero = returnedHero);
		});
	}

	goBack(): void {
		window.history.back();
	}

	save(): void {
		this.heroService.update(this.hero)
			.then(this.goBack);
	}
}
