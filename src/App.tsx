import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import CloudIcon from '@mui/icons-material/Cloud';
import BoltIcon from '@mui/icons-material/Bolt';
import GitHubIcon from '@mui/icons-material/GitHub';
import WebIcon from '@mui/icons-material/Web';

function Copyright() {
  return (
    <Typography
      variant="body2"
      align="center"
      sx={{
        color: 'text.secondary',
      }}
    >
      {'Copyright © '}
      <Link color="inherit" href="https://iski.ink/"> 
      skikawa 
      </Link> {' '}
      {new Date().getFullYear()}.
    </Typography>
  );
}

export default function App() {
  return (
    <Container maxWidth="lg" sx={{ minHeight: '90vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', py: 4 }}>
      <Box>
        {/* 个人头部区域 */}
        <Box 
          sx={{ 
            textAlign: 'center', 
            mb: 5,
            p: 10,
            background: 'linear-gradient(0deg, #EEEEEE 100%, #EEEEEE 100%)',
            borderRadius: 3,
          }}
        >

          <Typography 
            variant="h3" 
            component="h1" 
            sx={{ 
              mb: 1, 
              fontWeight: 700,
              background: 'linear-gradient(135deg, #1565c0 0%, #1565c0 100%)',
              backgroundClip: 'text',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              letterSpacing: '0.5px',
            }}
          >
            Skikawa
          </Typography>

          <Typography 
            variant="body2" 
            sx={{ 
              color: 'text.secondary',
              fontSize: '0.95rem',
            }}
          >
            Hello,world!
          </Typography>
        </Box>
        <Divider sx={{ my: 3, opacity: 0.5 }} />

        <Grid container spacing={2}>
          {/* 卡片1 */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card 
              sx={{ 
                height: '100%',
                borderRadius: 2.5,
                background: '#F5F5F5',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                transition: 'all 0.2s ease-out',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.15)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  sx={{ 
                    mb: 1.5, 
                    fontWeight: 700,
                    color: 'primary.dark',
                    fontSize: '0.95rem',
                    letterSpacing: '0.3px',
                  }}
                >
                  <CloudIcon>skistorage</CloudIcon>
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    lineHeight: 1.6, 
                    color: 'text.secondary',
                    fontSize: '0.85rem',
                  }}
                >
                  <Link color="inherit" href="https://sto.iski.ink/"> SkiStorage </Link>{' '} 基于Cloudreve的个人云存储平台
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 卡片2 */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card 
              sx={{ 
                height: '100%',
                borderRadius: 2.5,
                background: '#F5F5F5',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                transition: 'all 0.2s ease-out',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.15)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  sx={{ 
                    mb: 1.5, 
                    fontWeight: 700,
                    color: 'primary.dark',
                    fontSize: '0.95rem',
                    letterSpacing: '0.3px',
                  }}
                >
                  <WebIcon>blog</WebIcon>
                </Typography>
                <Typography
                variant="body2" 
                  sx={{ 
                    lineHeight: 1.6, 
                    color: 'text.secondary',
                    fontSize: '0.85rem',
                  }}
                >
                    <Link color="inherit" href="https://blog.iski.ink/"> Skikawa </Link>{' '} 个人站点随缘更新
                  </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 卡片3 */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card 
              sx={{ 
                height: '100%',
                borderRadius: 2.5,
                background: '#F5F5F5',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                transition: 'all 0.2s ease-out',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.15)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  sx={{ 
                    mb: 1.5, 
                    fontWeight: 700,
                    color: 'primary.dark',
                    fontSize: '0.95rem',
                    letterSpacing: '0.3px',
                  }}
                >
                  <BoltIcon>skistatus</BoltIcon>
                </Typography>
                <Typography 
                  variant="body2" 
                  sx={{ 
                    lineHeight: 1.6, 
                    color: 'text.secondary',
                    fontSize: '0.85rem',
                  }}
                >
                  <Link color="inherit" href="https://status.iski.ink/"> SkiStatus </Link>{' '} 基于Uptimerobot的服务状态监控平台
                </Typography>
              </CardContent>
            </Card>
          </Grid>

          {/* 卡片4 */}
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Card 
              sx={{ 
                height: '100%',
                borderRadius: 2.5,
                background: '#F5F5F5',
                boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05), 0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(0, 0, 0, 0.06)',
                transition: 'all 0.2s ease-out',
                display: 'flex',
                flexDirection: 'column',
                '&:hover': {
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.15)',
                  transform: 'translateY(-1px)',
                },
              }}
            >
              <CardContent sx={{ p: 2, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <Typography 
                  variant="h6" 
                  component="h2" 
                  sx={{ 
                    mb: 1.5, 
                    fontWeight: 700,
                    color: 'primary.dark',
                    fontSize: '0.95rem',
                    letterSpacing: '0.3px',
                  }}
                >
                  <GitHubIcon>skikawa</GitHubIcon>
                </Typography>
                  <Typography
                    variant="body2" 
                    sx={{ 
                      lineHeight: 1.6, 
                      color: 'text.secondary',
                      fontSize: '0.85rem',
                    }}
                  >
                    <Link color="inherit" href="https://github.com/skikawa"> MyGithub </Link>{' '} 内有本页面源码
                  </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
            <Box sx={{ mt: 4, textAlign: 'center' }}>
          <Copyright />
        </Box>
      </Box>
    </Container>
  );
}