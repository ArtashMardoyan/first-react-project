import { connect } from 'react-redux';

import { followAC, unFollowAC, setUsersAC, setCurrentPageAC, setTotalCountAC } from '../../redux/User/usersReducer';
import Users from './Users';

const mapStateToProps = state => ({ usersPage: state.usersPage });
const mapDispatchToProps = dispatch => ({
    follow: userId => dispatch(followAC(userId)),
    unFollow: userId => dispatch(unFollowAC(userId)),
    setUsers: users => dispatch(setUsersAC(users)),
    setCurrentPage: currentPage => dispatch(setCurrentPageAC(currentPage)),
    setTotalCount: total => dispatch(setTotalCountAC(total))
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
