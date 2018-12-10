import React, {Component} from 'react';

const AsyncComponent = (importComponent, options) => {
    return class extends Component {
        constructor(props) {
          super(props)
          this.state = {
            component: null,
          }
        }

        componentDidMount() {
            importComponent()
                .then(cmp => {
                    this.setState({
                      component: cmp.default,
                    });
                });
        }

        render() {
            const C = this.state.component;

            return C ? <C {...this.props}/> :
            options && options.height ?
              <div className="grey lighten-4 center-align center-element" style={{
                  width: `${options.width ? options.width : '100%'}`,
                  height: `${options.height ? options.height : '0px'}`,
                }}>
                <div style={{position: 'absolute', left: '50%', top: '50%'}} className="preloader-wrapper big active ">
                 <div className="spinner-layer spinner-blue">
                   <div className="circle-clipper left">
                     <div className="circle"></div>
                   </div>
                 </div>
               </div>
              </div>
            : null;
        }
    }
};

export default AsyncComponent;