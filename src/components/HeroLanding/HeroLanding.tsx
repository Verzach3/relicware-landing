import { Container, Text, Button, Group } from '@mantine/core';
import { GithubIcon } from '@mantinex/dev-icons';
import classes from './HeroLanding.module.css';

export function HeroLanding() {
  return (
    <div className={classes.wrapper}>
      <Container size={700} className={classes.inner}>
        <h1 className={classes.title}>
          Somos una empresa de{' '}
          <Text component="span" variant="gradient" gradient={{ from: 'blue', to: 'cyan' }} inherit>
            desarrollo de software.
          </Text>{' '}
        </h1>

        <Text className={classes.description} color="dimmed">
          Pronto podras ver nuestros productos aqui.
        </Text>
        <Text className={classes.description} color="dimmed">
          RelicWare Co. - 2024
        </Text>

        <Group className={classes.controls}>
          {/* <Button
            size="xl"
            className={classes.control}
            variant="gradient"
            gradient={{ from: 'blue', to: 'cyan' }}
          >
            Get started
          </Button>

          <Button
            component="a"
            href="https://github.com/mantinedev/mantine"
            size="xl"
            variant="default"
            className={classes.control}
            leftSection={<GithubIcon size={20} />}
          >
            GitHub
          </Button> */}
        </Group>
      </Container>
    </div>
  );
}