import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

interface NewsItem {
  id: number;
  title: string;
  description: string;
  category: string;
  time: string;
  image: string;
  featured?: boolean;
}

interface Match {
  id: number;
  opponent: string;
  date: string;
  time: string;
  location: string;
  competition: string;
  score?: string;
  status: 'upcoming' | 'live' | 'finished';
}

interface Video {
  id: number;
  title: string;
  thumbnail: string;
  duration: string;
  views: string;
}

const Index = () => {
  const [activeTab, setActiveTab] = useState('news');

  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: 'ЦСКА одержал победу в дерби',
      description: 'Армейцы уверенно обыграли соперника со счетом 3:1 в напряженном матче',
      category: 'Матчи',
      time: '2 часа назад',
      image: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=800&h=400&fit=crop',
      featured: true
    },
    {
      id: 2,
      title: 'Новое пополнение в составе',
      description: 'Клуб объявил о подписании контракта с перспективным защитником',
      category: 'Трансферы',
      time: '5 часов назад',
      image: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&h=400&fit=crop'
    },
    {
      id: 3,
      title: 'Тренировка перед важным матчем',
      description: 'Команда провела открытую тренировку на базе клуба',
      category: 'Тренировки',
      time: '8 часов назад',
      image: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&h=400&fit=crop'
    },
    {
      id: 4,
      title: 'Интервью главного тренера',
      description: 'Наставник команды рассказал о планах на предстоящий сезон',
      category: 'Интервью',
      time: '12 часов назад',
      image: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=800&h=400&fit=crop'
    }
  ];

  const matches: Match[] = [
    {
      id: 1,
      opponent: 'Спартак',
      date: '15 ноября',
      time: '19:30',
      location: 'ВЭБ Арена',
      competition: 'РПЛ',
      status: 'upcoming'
    },
    {
      id: 2,
      opponent: 'Зенит',
      date: '10 ноября',
      time: '16:00',
      location: 'Газпром Арена',
      competition: 'РПЛ',
      score: '2:1',
      status: 'finished'
    },
    {
      id: 3,
      opponent: 'Динамо',
      date: '20 ноября',
      time: '18:00',
      location: 'ВТБ Арена',
      competition: 'Кубок России',
      status: 'upcoming'
    }
  ];

  const videos: Video[] = [
    {
      id: 1,
      title: 'Лучшие моменты матча ЦСКА - Зенит',
      thumbnail: 'https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=600&h=340&fit=crop',
      duration: '5:32',
      views: '125K'
    },
    {
      id: 2,
      title: 'Обзор тренировки команды',
      thumbnail: 'https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=600&h=340&fit=crop',
      duration: '8:15',
      views: '89K'
    },
    {
      id: 3,
      title: 'Послематчевое интервью капитана',
      thumbnail: 'https://images.unsplash.com/photo-1606925797300-0b35e9d1794e?w=600&h=340&fit=crop',
      duration: '3:47',
      views: '156K'
    },
    {
      id: 4,
      title: 'Все голы недели',
      thumbnail: 'https://images.unsplash.com/photo-1522778119026-d647f0596c20?w=600&h=340&fit=crop',
      duration: '6:21',
      views: '203K'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-cska-red to-cska-blue rounded-lg flex items-center justify-center font-bold text-white text-xl">
                ⚽
              </div>
              <div>
                <h1 className="text-2xl font-bold text-foreground">ЦСКА News</h1>
                <p className="text-sm text-muted-foreground">Официальный новостной портал</p>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <Button 
                variant={activeTab === 'news' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('news')}
                className="gap-2"
              >
                <Icon name="Newspaper" size={18} />
                Новости
              </Button>
              <Button 
                variant={activeTab === 'matches' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('matches')}
                className="gap-2"
              >
                <Icon name="Trophy" size={18} />
                Матчи
              </Button>
              <Button 
                variant={activeTab === 'videos' ? 'default' : 'ghost'} 
                onClick={() => setActiveTab('videos')}
                className="gap-2"
              >
                <Icon name="Play" size={18} />
                Видео
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-8">
          <TabsList className="md:hidden w-full grid grid-cols-3">
            <TabsTrigger value="news" className="gap-2">
              <Icon name="Newspaper" size={16} />
              Новости
            </TabsTrigger>
            <TabsTrigger value="matches" className="gap-2">
              <Icon name="Trophy" size={16} />
              Матчи
            </TabsTrigger>
            <TabsTrigger value="videos" className="gap-2">
              <Icon name="Play" size={16} />
              Видео
            </TabsTrigger>
          </TabsList>

          <TabsContent value="news" className="space-y-8 animate-fade-in">
            {newsItems.find(item => item.featured) && (
              <Card className="overflow-hidden border-2 border-cska-red/50 animate-pulse-glow">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative h-64 md:h-auto overflow-hidden">
                    <img 
                      src={newsItems.find(item => item.featured)!.image} 
                      alt="Featured news" 
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                    <Badge className="absolute top-4 left-4 bg-cska-red text-white">
                      🔥 Главная новость
                    </Badge>
                  </div>
                  <CardHeader className="p-8">
                    <div className="flex items-center gap-2 mb-4">
                      <Badge variant="secondary">{newsItems.find(item => item.featured)!.category}</Badge>
                      <span className="text-sm text-muted-foreground flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {newsItems.find(item => item.featured)!.time}
                      </span>
                    </div>
                    <CardTitle className="text-3xl mb-4">{newsItems.find(item => item.featured)!.title}</CardTitle>
                    <CardDescription className="text-base">{newsItems.find(item => item.featured)!.description}</CardDescription>
                    <Button className="mt-6 w-fit" size="lg">
                      Читать полностью
                      <Icon name="ArrowRight" size={18} className="ml-2" />
                    </Button>
                  </CardHeader>
                </div>
              </Card>
            )}

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {newsItems.filter(item => !item.featured).map((news) => (
                <Card key={news.id} className="overflow-hidden hover:border-cska-red/50 transition-all duration-300 hover:shadow-lg group animate-fade-in">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={news.image} 
                      alt={news.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <Badge className="absolute top-3 right-3 bg-background/90">
                      {news.category}
                    </Badge>
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                      <Icon name="Clock" size={14} />
                      {news.time}
                    </div>
                    <CardTitle className="text-xl line-clamp-2 group-hover:text-cska-red transition-colors">
                      {news.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-3">
                      {news.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="matches" className="space-y-6 animate-fade-in">
            <div className="grid gap-4">
              {matches.map((match) => (
                <Card key={match.id} className="overflow-hidden hover:border-cska-blue/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-16 bg-gradient-to-br from-cska-red to-cska-blue rounded-lg flex items-center justify-center font-bold text-white text-2xl">
                          ⚽
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="text-2xl font-bold">ЦСКА vs {match.opponent}</h3>
                            {match.status === 'live' && (
                              <Badge className="bg-cska-red text-white animate-pulse">
                                <Icon name="Radio" size={12} className="mr-1" />
                                LIVE
                              </Badge>
                            )}
                            {match.status === 'finished' && match.score && (
                              <Badge variant="secondary" className="text-lg font-bold">
                                {match.score}
                              </Badge>
                            )}
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                            <span className="flex items-center gap-1">
                              <Icon name="Calendar" size={14} />
                              {match.date}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="Clock" size={14} />
                              {match.time}
                            </span>
                            <span className="flex items-center gap-1">
                              <Icon name="MapPin" size={14} />
                              {match.location}
                            </span>
                            <Badge variant="outline">{match.competition}</Badge>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        {match.status === 'upcoming' && (
                          <Button variant="outline" className="gap-2">
                            <Icon name="Ticket" size={16} />
                            Билеты
                          </Button>
                        )}
                        {match.status === 'finished' && (
                          <Button variant="outline" className="gap-2">
                            <Icon name="FileText" size={16} />
                            Отчет
                          </Button>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="videos" className="animate-fade-in">
            <div className="grid md:grid-cols-2 gap-6">
              {videos.map((video) => (
                <Card key={video.id} className="overflow-hidden hover:border-cska-red/50 transition-all duration-300 group cursor-pointer">
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title} 
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors flex items-center justify-center">
                      <div className="w-16 h-16 bg-cska-red/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon name="Play" size={28} className="text-white ml-1" />
                      </div>
                    </div>
                    <Badge className="absolute bottom-3 right-3 bg-black/80 text-white">
                      {video.duration}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg line-clamp-2 group-hover:text-cska-red transition-colors">
                      {video.title}
                    </CardTitle>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Icon name="Eye" size={14} />
                      {video.views} просмотров
                    </div>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </main>

      <footer className="bg-card border-t border-border mt-16 py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cska-red to-cska-blue rounded-lg flex items-center justify-center font-bold text-white">
                ⚽
              </div>
              <div>
                <p className="font-bold">ЦСКА News</p>
                <p className="text-sm text-muted-foreground">© 2024 Все права защищены</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Icon name="Facebook" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Twitter" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Instagram" size={20} />
              </Button>
              <Button variant="ghost" size="icon">
                <Icon name="Youtube" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
