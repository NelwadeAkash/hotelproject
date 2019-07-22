import { Component , OnInit , OnChanges , OnDestroy  } from '@angular/core';
import { MovieService } from "src/movie/movie.service";

@Component({
  selector: 'mov-app',
  templateUrl : './movie.component.html',
  styleUrls: ['./movie.component.css']
})

export class MovieComponent   {
 
  // searchedMovies : any[] = [];
  // movieSearch:string;
  // errorMessage:string;

  constructor( private movService : MovieService ){
    
  }

  // ngOnInit(): void {
  //   this.movies = this.movService.getMovies().subscribe(
  //       movies => { 
  //         this.movies = movies;
  //         this.searchedMovies = movies;
  //       }

  //   );
  // }

  

  title:string = 'Top Hotels :';
  imgWidth:number=100;
  imgHeight:number=50;
  

  movies:any[] = [
      

            { mid :1 , movieName : "Lela Palace" , actor : "Bangalore" , release:"25%" , price:25000 , rating:4 , 
                                    imageUrl : "./../assets/hotel66.jpg" },
            { mid :2 , movieName : "Taj Hotel" , actor : "Mumbai" , release:"15%" ,
             price:30000 , rating:3 , imageUrl : "./../assets/hotel2.jpg" },
            { mid :3 , movieName : "ITC Mughal" , actor : "Delhi" , release:"32%" 
            , price:27000 , rating:4 , imageUrl : "./../assets/hotel12.jpeg" },
            { mid :4 , movieName : "Hotel Empire" , actor : "Goa" 
            , release:"30%" , price:34000 , rating:3.5 , imageUrl : "./../assets/hotel7.jpg" },
            { mid :5 , movieName : "The LaLiT" , actor : "Hydrabad" , 
            release:"40%" , price:32000 , rating:4 , imageUrl : './../assets/hotel10.jpg' },
            { mid :6 , movieName : "Blu Plaza" , actor : "Chennai" , 
            release:"22%" , price:25000 , rating:5 , imageUrl : "./../assets/hotel11.jpeg" },

        ];
  
  
  onRatingClicked(output : string) : void{
    this.title += output ;
  }

}
