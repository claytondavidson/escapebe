import React, { Fragment, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Spinner from '../Spinner/Spinner.component';
import GroupItem from '../GroupItem/GroupItem.component';
import { getGroups } from '../../../redux/actions/group';
import GroupForm from '../GroupForm/GroupForm.component';

const Groups = ({ getGroups, group: { groups, loading } }) => {
  useEffect(() => {
    getGroups();
  }, [getGroups]);

  return loading ? (
    <Spinner />
  ) : (
    <Fragment>
      <h1>Groups</h1>
      <div className='groups'>
        {groups.map(group => (
          <GroupItem key={group._id} group={group} />
        ))}
      </div>
      <GroupForm />
    </Fragment>
  );
};

Groups.propTypes = {
  getGroups: PropTypes.func.isRequired,
  group: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  group: state.group
});

export default connect(mapStateToProps, { getGroups })(Groups);
