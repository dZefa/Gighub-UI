import React, { Component } from 'react';

class CompanyJobsView extends Component {
  constructor(props) {
    super(props);

    this.state = {
      headline: '',
      description: '',
      startSalary: 0,
      endSalary: 0,
      startSalaryOptions: [],
      endSalaryOptions: [],
      location: '',
    }
  }

  loadStartSalary() {
    const startArr = [];

    for(let i = 10; i <= 200; i += 10) {
      startArr.push(i);
    }

    this.setState({
      startSalaryOptions: startArr,
    });
  }

  loadEndSalary(num) {
    const endArr = [];

    for(let i = parseInt(num); i <= (parseInt(num)+100); i += 10) {
      endArr.push(i);
    }

    this.setState({
      endSalaryOptions: endArr,
    });
  }

  setHeadline(text) {
    this.setState({
      headline: text,
    });
  }

  setDescription(text) {
    this.setState({
      description: text,
    });
  }

  setStart(num) {
    this.setState({
      startSalary: parseInt(num),
    });
  }

  setEnd(num) {
    this.setState({
      endSalary: parseInt(num),
    });
  }

  setLocation(text) {
    this.setState({
      location: text,
    });
  }

  render() {
    const { startSalary, startSalaryOptions, endSalary, endSalaryOptions, headline, description } = this.state;

    return (
      <div>
        <div className="row justify-content-center login-row">
          <h3>Company Job Postings</h3>
          <button type="button" className="btn btn-outline-primary company-job-button" data-toggle="modal" data-target="#companyJobModal" 
            onClick={(e) => {
              e.preventDefault();
              this.loadStartSalary();
            }}
          >
            Post Job
          </button>
          <div className="modal" id="companyJobModal" tabIndex="-1" role="dialog" aria-labelledby="companyJobLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="companyJobLabel">Post a New Job</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  <form>
                    <div className="form-group">
                      <label htmlFor="comp-job_head">Headline or Job Position/Title</label>
                      <input type="text" id="comp-job_head" className="form-control" onChange={(e) => this.setHeadline(e.target.value)} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="comp-job_desc">Last Name</label>
                      <input type="text" id="comp-job_desc" className="form-control" onChange={(e) => this.setDescription(e.target.value)} />
                    </div>
                    <div className="form-group row">
                      <div className="col col-lg-auto">
                        <label htmlFor="comp-job_salStart">Salary Start</label>
                        <select id="comp-job_salStart" className="form-control" onChange={(e) => {
                          this.setStart(e.target.value);
                          this.loadEndSalary(e.target.value);
                        }}>
                          <option value="" disabled selected>Choose...</option>
                          {
                            startSalaryOptions.map((amnt, i) => (
                              <option key={`start-sal-key-${i}`} value={amnt}>{`${amnt}K`}</option>
                            ))
                          }
                        </select>
                      </div>
                      <div className="col col-lg-auto">
                        <label htmlFor="comp-job_salEnd">Salary Start</label>
                          <select id="comp-job_salEnd" className="form-control" onChange={(e) => {
                            this.setEnd(e.target.value);
                          }}>
                          <option value="" disabled selected>Choose...</option>
                          {
                            endSalaryOptions.map((amnt, i) => (
                              <option key={`start-end-key-${i}`} value={amnt}>{`${amnt}K`}</option>
                            ))
                          }
                        </select>
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="comp-job_loc">Location</label>
                      <input type="text" id="comp-job_loc" className="form-control" placeholder="CITY, STATE or STATE, COUNTRY" onChange={(e) => this.setLocation(e.target.value)} />
                    </div>
                  </form>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-outline-primary" data-dismiss="modal" onClick={(e) => {
                    e.preventDefault();
                  }} >
                    Post Job
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};

export default CompanyJobsView;
