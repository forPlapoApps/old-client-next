import Layout from "@/core/layouts/Layout";
import {
  createStyles,
  Title,
  Text,
  Button,
  Container,
  Group,
} from "@mantine/core";
import { useRouter } from "next/router";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: 80,
    paddingBottom: 80,
  },

  label: {
    textAlign: "center",
    fontWeight: 900,
    fontSize: 220,
    lineHeight: 1,
    marginBottom: theme.spacing.xl * 1.5,
    color: theme.colors.dark[4],

    [theme.fn.smallerThan("sm")]: {
      fontSize: 120,
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: 38,

    [theme.fn.smallerThan("sm")]: {
      fontSize: 32,
    },
  },

  description: {
    maxWidth: 500,
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: theme.spacing.xl * 1.5,
  },
}));

type InitialProps = {
  title: string
  statusCode: 404 | 500
  headline: string
  description: string
}

const ErrorComponent = ({ title, statusCode, headline, description }: InitialProps) => {
  const { classes } = useStyles();
  const router = useRouter();

  return (
    <Layout title={title}>
      <Container className={classes.root}>
        <div className={classes.label}>{statusCode}</div>
        <Title className={classes.title}>{headline}</Title>
        <Text
          color="dimmed"
          size="lg"
          align="center"
          className={classes.description}
        >
          {description}
        </Text>
        <Group position="center">
          <Button
            onClick={() => {
              router.push("/");
            }}
            variant="subtle"
            size="md"
          >
            Take me back to home page
          </Button>
        </Group>
      </Container>
    </Layout>
  );
};

export default ErrorComponent;
