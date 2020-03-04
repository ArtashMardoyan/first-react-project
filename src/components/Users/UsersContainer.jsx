import { connect } from 'react-redux';

import { followAC, unFollowAC, setUsersAC } from '../../redux/User/usersReducer';
import Users from './Users';

const mapStateToProps = state => ({ usersPage: state.usersPage });
const mapDispatchToProps = dispatch => ({
    follow: userId => dispatch(followAC(userId)),
    unFollow: userId => dispatch(unFollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
