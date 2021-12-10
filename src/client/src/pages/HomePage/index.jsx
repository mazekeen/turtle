import Layout from '../../components/Layout';

import ActivityList from '../../components/ActivityList';
import Navigation from '../../components/Navigation';
import Statistics from '../../components/Statistics';

function HomePage() {
    return (
        <Layout>
            <Layout.Navigation>
                <Navigation />
            </Layout.Navigation>

            <Layout.Menu>
                <ActivityList />
            </Layout.Menu>

            <Layout.Content>
                <Statistics />
            </Layout.Content>
        </Layout>
    );
}

export default HomePage;
