import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail.model';
import { CocktailService } from '../cocktail.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cocktail-details',
  templateUrl: './cocktail-details.component.html',
  styleUrls: ['./cocktail-details.component.css']
})
export class CocktailDetailsComponent implements OnInit {

  details: Cocktail = null
  cols: any = []
  imageUrl: string;
  constructor(private service: CocktailService, private routes: ActivatedRoute) { }

  ngOnInit(): void {
    this.fetchDetails(this.routes.snapshot.params['id'])
    this.buildCols()
  }

  fetchDetails(id) {
    this.service.getDetails(id).subscribe((res: any) => {
      if (res && res.drinks && res.drinks.length) {
        this.details = res.drinks[0]
        this.imageUrl = this.details.strDrinkThumb
        console.log('img',this.imageUrl)
      }
    })
  }
  buildCols() {
    this.cols = ['idDrink', 'strDrink', 'strIngredient1', 'strIngredient2', 'strIngredient3',
      'strIngredient4', 'strIngredient5', 'strIngredient6', 'strIngredient7', 'strIngredient8',
      'strIngredient9', 'strIngredient10', 'strIngredient11', 'strIngredient12', 'strIngredient13', 'strIngredient14', 'strIngredient15',]
  }
}
