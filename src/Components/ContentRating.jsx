
import React, { Component } from 'react';
import './ContentRating.css';

class ContentRating extends Component {
  constructor() {
    super();
    this.state = {
        likes: 0,
        dislikes: 0,
        totalRatings: 0,

        handleLike:() => {
            this.setState( (prevState) => ({
                likes: prevState.likes + 1,
                totalRatings: prevState.totalRatings + 1
            }));
        },

        handleDislike:() => {
            this.setState((prevState) => ({
                dislikes: prevState.dislikes + 1,
                totalRatings: prevState.totalRatings + 1
            }))

        }

    };
  }
  render() {
    return (
     <div className='content-rating'>
        <p>
            In the middle of the journey of our life I found myself within a dark woods where the straight way was lost. Ah, how hard a thing it is to tell what was this forest savage, dense, and harsh, which in the very thought renews the fear! It is so bitter, death is little more; but to treat of the good which I found there, I will speak of the other things I saw there. I cannot well say how I entered it, so full was I of sleep at the moment I left the true way. But when I had reached a mountain’s foot, at that point where the valley terminated, I looked on high and saw its shoulders clothed with the rays of that planet which leads all on the right way; then was my fear a little quieted. What else I saw there, I will tell in the following song.
        </p>
        <div className='rating-buttons'>
            <button className='like-button' onClick={this.state.handleLike}>
                Like ({this.state.likes});
            </button>
            <button className='dislike-button' onClick={this.state.handleDislike}>
                Dislike ({this.state.dislikes});
            </button>
        </div>
        <p>
            Total Ratings: {this.state.totalRatings}
        </p>
     </div>
     
    );
  }
}

export default ContentRating;
