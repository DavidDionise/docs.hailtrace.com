import React from 'react';
import {
  Paper,
  Typography,
  Divider,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from 'mui';
import { splitCamelCase } from 'utils';

class InteractorDocs extends React.Component {
  render() {
    const { interactor_name, route } = this.props.docs.meta;
    const { description, params } = this.props.docs
    const [ method ] = route.split(' ');

    return (
      <div ref={interactor_name}>
        <Paper style={{ marginBottom: '20px', padding: '10px' }}>
          <Typography variant='display1'>{splitCamelCase(interactor_name, true)}</Typography>

          <Divider style={{ margin: '10px 0 10px 0' }} />

          <Typography variant='title'>Description</Typography>
          <Typography variant='body1'>{description}</Typography>

          <Divider style={{ margin: '10px 0 10px 0' }} />

          <Typography variant='title'>Route</Typography>
          <Typography variant='body1'>{route}</Typography>
          {!/^(get|delete)$/i.test(method) ? (
            <div>

              <Divider style={{ margin: '10px 0 10px 0' }} />

              <Typography variant='title'>Payload</Typography>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Name</TableCell>
                    <TableCell>Type</TableCell>
                    <TableCell>Description</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                {params.map(param => {
                  return (
                    <TableRow>
                      <TableCell>{param.name}</TableCell>
                      <TableCell>
                        {param.type.names.map((name, idx) => {
                          const type_name = `${name[0].toUpperCase()}${name.substr(1).toLowerCase()}`
                          return idx == 0 ? type_name : ` | ${type_name}`;
                        })}
                      </TableCell>
                      <TableCell>
                        {param.description}
                      </TableCell>
                    </TableRow>
                  );
                })}
                </TableBody>
              </Table>
            </div>
          ) : null}
        </Paper>
      </div>
    );
  }
}

export default InteractorDocs;
