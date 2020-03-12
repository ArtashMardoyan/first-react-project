import { connect } from 'react-redux';

import { createPost, updateNewPostText } from '../../../redux/Profile/profileReducer';
import MyPosts from './MyPosts';

const mapStateToProps = state => ({ profileReducer: state.profileReducer });
const mapDispatchToProps = { createPost, updateNewPostText };

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);
