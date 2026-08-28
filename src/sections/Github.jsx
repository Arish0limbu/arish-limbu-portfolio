import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Github as GithubIcon, Star, GitFork, Code, Users, ExternalLink } from 'lucide-react';
import { profile } from '../data/profile';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import './Github.css';

const GithubSection = () => {
  const [githubData, setGithubData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchGithubData = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${profile.github}`);
        if (response.ok) {
          const data = await response.json();
          setGithubData(data);
        } else {
          throw new Error('Failed to fetch GitHub data');
        }
      } catch (err) {
        console.error('GitHub API error:', err);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchGithubData();
  }, [profile.github]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const fallbackData = {
    login: profile.github,
    public_repos: profile.stats.repositories,
    followers: 0,
    following: 0
  };

  const displayData = githubData || fallbackData;

  const stats = [
    {
      icon: Code,
      label: 'Repositories',
      value: displayData.public_repos,
      color: '#6366f1'
    },
    {
      icon: Users,
      label: 'Followers',
      value: displayData.followers,
      color: '#8b5cf6'
    },
    {
      icon: Users,
      label: 'Following',
      value: displayData.following,
      color: '#06b6d4'
    }
  ];

  return (
    <section id="github" className="github">
      <div className="container">
        <SectionTitle 
          title="GITHUB" 
          subtitle="Check out my repositories and contributions"
          align="center"
        />

        <motion.div
          className="github__content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <motion.div
            className="github__profile"
            variants={itemVariants}
          >
            <div className="github__avatar">
              <GithubIcon size={64} />
            </div>
            
            <h2 className="github__username">@{displayData.login}</h2>
            <p className="github__bio">
              Explore my code repositories, projects, and contributions on GitHub.
            </p>

            <div className="github__stats">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  className="github__stat"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <stat.icon size={24} style={{ color: stat.color }} />
                  <div className="github__stat-value">{stat.value}</div>
                  <div className="github__stat-label">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <Button 
              variant="primary" 
              size="large"
              href={`https://github.com/${profile.github}`}
              icon="github"
              className="github__cta"
            >
              Visit GitHub Profile
            </Button>
          </motion.div>

          {!loading && !error && githubData && (
            <motion.div
              className="github__info"
              variants={itemVariants}
            >
              <div className="github__info-card">
                <h3 className="github__info-title">Profile Information</h3>
                <div className="github__info-details">
                  {githubData.name && (
                    <div className="github__info-row">
                      <span className="github__info-label">Name:</span>
                      <span className="github__info-value">{githubData.name}</span>
                    </div>
                  )}
                  {githubData.location && (
                    <div className="github__info-row">
                      <span className="github__info-label">Location:</span>
                      <span className="github__info-value">{githubData.location}</span>
                    </div>
                  )}
                  {githubData.blog && (
                    <div className="github__info-row">
                      <span className="github__info-label">Website:</span>
                      <a 
                        href={githubData.blog} 
                        className="github__info-link"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {githubData.blog}
                        <ExternalLink size={14} />
                      </a>
                    </div>
                  )}
                  {githubData.created_at && (
                    <div className="github__info-row">
                      <span className="github__info-label">Joined:</span>
                      <span className="github__info-value">
                        {new Date(githubData.created_at).toLocaleDateString()}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}

          {error && (
            <motion.div
              className="github__error"
              variants={itemVariants}
            >
              <p>Unable to fetch live GitHub data. Showing static information.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default GithubSection;
