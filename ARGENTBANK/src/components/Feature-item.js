import React from 'react';


class FeatureItem extends React.Component {
    
    render (){
        return (
            <div className="feature-item">
              <img 
                src={this.props.icon} 
                alt={this.props.text.alt} 
                className="feature-icon" 
              />
              <h3 className="feature-item-title">{this.props.text.title} </h3>
              <p>{this.props.text.text} </p>
            </div>
        )
    }
}
export default FeatureItem