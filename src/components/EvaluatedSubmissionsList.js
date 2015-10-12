import React from 'react';
import SubmissionsList from './SubmissionsList';

class EvaluatedSubmissionsList extends SubmissionsList {
  constructor(props) {
    super(props);
    this.state = {
      submissions: []
    };
  }

  componentDidMount() {
    this.loadSubmissions()
  }

  loadSubmissions() {
    this.setState({
      submissions: [{ id: 1, name: 'Ania', mark: 5 }]
    });
  }

  headersList() {
    return ['Name', 'Mark'];
  }

  tableBody() {
    const body = this.state.submissions.map(submission => {
      return (
        <tr key={submission.id}>
          <td>{submission.name}</td>
          <td>{submission.mark}</td>
        </tr>
      );
    });

    return (
      <tbody>{body}</tbody>
    );
  }
};

export default EvaluatedSubmissionsList;