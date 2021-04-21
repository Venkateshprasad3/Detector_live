import React,{Component} from 'react';
import { db } from '../firebase';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
export default class Display extends Component{
    constructor(props)
    {
     
        super(props);
        this.ref = db.collection('comments');
        this.state={
            dataSource : [
              {comments:''}

            ]
          }
    }


    componentDidMount(){
        this.unsubscribe = this.ref.onSnapshot(this.latestComments);
        
      }




    
    latestComments = (commentsSnapShot) =>{
        const Comment = [];
        commentsSnapShot.forEach((doc) => {
        const { comments} = doc.data();
          Comment.push({
            comments
          });
        });
        this.setState({
          dataSource : Comment,
        });
        console.log(this.state.dataSource);

      
        
        
      }


      render(){
     
       return(
           
            <div>
                {
                  this.state.dataSource.map((user)=>{
                    return<div><List component="nav">
                    <ListItem>
                      <ListItemText primary={user.comments} />
                    </ListItem>
                    </List></div>
                  })
                }
            </div>
       )
     }
      
}