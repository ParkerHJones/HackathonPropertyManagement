import { Component } from ‘react’;
import { Grid, Card, Image, Button, Modal } from ‘semantic-ui-react’;
import JobForm from ‘./JobForm’;
class Item extends Component {
  state = { open: false }
  setOpen = (val) => this.setState({ open: val })
  render() {
    const { deleteJob, buildingId, id, pic, job_name, price } = this.props
    const { open } = this.state
    return (
      <Grid.Column>
        <Card>
          <Image src={pic} wrapped ui={false} size=‘medium’ />
          <Card.Content>
            <Card.Header>{job_name}</Card.Header>
            <Card.Description>
              {price}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Button icon=‘trash’ color=‘red’ onClick={() => deleteJob(menuId, id)} />
            <Modal
              onClose={() => this.setOpen(false)}
              onOpen={() => this.setOpen(true)}
              open={open}
              trigger={<Button icon=‘pencil’ color=‘yellow’ />}
            >
              <Modal.Header>Edit Menu Job</Modal.Header>
              <Modal.Content>
                <Modal.Description>
                  <JobForm
                    setOpen={this.setOpen}
                    {...this.props}
                  />
                </Modal.Description>
              </Modal.Content>
            </Modal>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }
}
export default Job;