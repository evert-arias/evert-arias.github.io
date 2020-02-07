import React from 'react';
import { Container, Card } from 'components/common';
import { Wrapper, Grid, Item, Content } from './styles';
import myApps from '../../../data/apps';

export const Apps = () => (
  <Wrapper as={Container} id="apps">
    <h2>Apps</h2>
    <Grid>
      {myApps.enabled ? (
        myApps.apps.map(app =>
          app.show ? (
            <Item key={app.id} as="a" href={app.url} target="_blank" rel="noopener noreferrer">
              <Card>
                <Content>
                  <h4>{app.name}</h4>
                  <p>{app.desc}</p>
                </Content>
                <div>
                  <span>{app.url}</span>
                </div>
              </Card>
            </Item>
          ) : null
        )
      ) : (
        <p>No apps to show</p>
      )}
    </Grid>
  </Wrapper>
);
