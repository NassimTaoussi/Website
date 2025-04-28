import React from 'react';
import Layout from '@theme/Layout';
import PersonalProjectsPage from '../components/PersonalProjects';

export default function Project() {
  return (
    <Layout title="Project" description="My Projects">
      <main>
      <PersonalProjectsPage/>
      </main>
    </Layout>
  );
}