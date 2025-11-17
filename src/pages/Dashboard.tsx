import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Activity, TrendingUp, Clock, AlertCircle, CheckCircle } from "lucide-react";
import { useAnalysisHistory } from "@/hooks/useAnalysisHistory";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";

export default function Dashboard() {
  const { history } = useAnalysisHistory();
  const [stats, setStats] = useState({
    totalAnalyses: 0,
    avgResponseTime: 0,
    successRate: 0,
    detectionRate: 0,
    categoryDistribution: {} as Record<string, number>,
    languageDistribution: {} as Record<string, number>,
  });

  useEffect(() => {
    if (history.length === 0) return;

    const totalAnalyses = history.length;
    const responseTimes = history
      .map(h => h.result?.totalClientTime || h.result?.processingTime || 0)
      .filter(t => t > 0);
    
    const avgResponseTime = responseTimes.length > 0
      ? Math.round(responseTimes.reduce((a, b) => a + b, 0) / responseTimes.length)
      : 0;

    const successfulAnalyses = history.filter(h => h.result && !h.result.error).length;
    const successRate = Math.round((successfulAnalyses / totalAnalyses) * 100);

    const detectedHarmful = history.filter(h => h.result?.safe === false).length;
    const detectionRate = Math.round((detectedHarmful / totalAnalyses) * 100);

    // Category distribution
    const categoryDist: Record<string, number> = {};
    history.forEach(h => {
      if (h.result?.categories) {
        h.result.categories.forEach((cat: any) => {
          if (cat.confidence > 0.3) { // Only count significant detections
            categoryDist[cat.name] = (categoryDist[cat.name] || 0) + 1;
          }
        });
      }
    });

    // Language distribution
    const langDist: Record<string, number> = {};
    history.forEach(h => {
      if (h.result?.detectedLanguage?.primary) {
        const lang = h.result.detectedLanguage.primary;
        langDist[lang] = (langDist[lang] || 0) + 1;
      }
    });

    setStats({
      totalAnalyses,
      avgResponseTime,
      successRate,
      detectionRate,
      categoryDistribution: categoryDist,
      languageDistribution: langDist,
    });
  }, [history]);


  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <div className="container px-4 py-24">
        <div className="mb-8 mt-16">
          <h1 className="text-3xl md:text-4xl font-bold mb-2">Performance Dashboard</h1>
          <p className="text-muted-foreground">Real-time analytics and monitoring</p>
        </div>

        {history.length === 0 ? (
          <Card className="p-12 text-center">
            <AlertCircle className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
            <h3 className="text-xl font-semibold mb-2">No Data Available</h3>
            <p className="text-muted-foreground">
              Perform some analyses to see performance metrics here
            </p>
          </Card>
        ) : (
          <>
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Activity className="w-5 h-5 text-primary" />
                  <Badge variant="secondary">Total</Badge>
                </div>
                <div className="text-3xl font-bold mb-1">{stats.totalAnalyses}</div>
                <div className="text-sm text-muted-foreground">Analyses Performed</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <Clock className="w-5 h-5 text-blue-600" />
                  <Badge variant="outline">Avg</Badge>
                </div>
                <div className="text-3xl font-bold mb-1">{stats.avgResponseTime}ms</div>
                <div className="text-sm text-muted-foreground">Response Time</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <Badge variant="secondary">Rate</Badge>
                </div>
                <div className="text-3xl font-bold mb-1">{stats.successRate}%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </Card>

              <Card className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-5 h-5 text-destructive" />
                  <Badge variant="destructive">Detection</Badge>
                </div>
                <div className="text-3xl font-bold mb-1">{stats.detectionRate}%</div>
                <div className="text-sm text-muted-foreground">Harmful Content</div>
              </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Category Distribution */}
              {Object.keys(stats.categoryDistribution).length > 0 && (
                <Card className="p-6 lg:col-span-2">
                  <h3 className="text-lg font-semibold mb-4">Top Detected Categories</h3>
                  <div className="space-y-3">
                    {Object.entries(stats.categoryDistribution)
                      .sort(([,a], [,b]) => (b as number) - (a as number))
                      .slice(0, 10)
                      .map(([category, count]) => (
                        <div key={category} className="flex items-center justify-between">
                          <span className="text-sm">{category}</span>
                          <div className="flex items-center gap-2">
                            <div className="w-32 h-2 bg-muted rounded-full overflow-hidden">
                              <div 
                                className="h-full bg-primary" 
                                style={{ width: `${(count as number / history.length) * 100}%` }}
                              />
                            </div>
                            <Badge variant="outline">{count as number}</Badge>
                          </div>
                        </div>
                      ))}
                  </div>
                </Card>
              )}

              {/* Language Distribution */}
              {Object.keys(stats.languageDistribution).length > 0 && (
                <Card className="p-6">
                  <h3 className="text-lg font-semibold mb-4">Language Distribution</h3>
                  <div className="space-y-3">
                    {Object.entries(stats.languageDistribution).map(([lang, count]) => (
                      <div key={lang} className="flex items-center justify-between">
                        <span className="text-sm">{lang}</span>
                        <div className="flex items-center gap-2">
                          <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-secondary" 
                              style={{ width: `${(count as number / history.length) * 100}%` }}
                            />
                          </div>
                          <Badge variant="secondary">{count as number}</Badge>
                        </div>
                      </div>
                    ))}
                  </div>
                </Card>
              )}
            </div>

            {/* Recent Analyses */}
            <Card className="p-6 mt-6">
              <h3 className="text-lg font-semibold mb-4">Recent Analyses</h3>
              <div className="space-y-3">
                {history.slice(0, 5).map((item) => (
                  <div key={item.id} className="flex items-center justify-between p-3 border rounded-lg">
                    <div className="flex-1 min-w-0 mr-4">
                      <p className="text-sm truncate">{item.text}</p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(item.timestamp).toLocaleString()}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      {item.result?.safe ? (
                        <Badge variant="secondary">Safe</Badge>
                      ) : (
                        <Badge variant="destructive">Harmful</Badge>
                      )}
                      {item.result?.totalClientTime && (
                        <span className="text-xs text-muted-foreground">
                          {item.result.totalClientTime}ms
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
}
