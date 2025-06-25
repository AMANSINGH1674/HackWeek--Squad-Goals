"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Trophy, Star, Target, Calendar, Shirt, Award, Crown, TrendingUp, Flame, Medal } from "lucide-react"
import Image from "next/image"

interface Player {
  id: number
  name: string
  role: string
  battingAverage: number
  bowlingAverage?: number
  image: string
  strikeRate: number
  matchesPlayed: number
  jerseyNumber: number
  bestPerformance: string
  totalRuns?: number
  totalWickets?: number
  specialty: string
  championshipContribution: string
}

const teamData = {
  name: "Royal Challengers Bangalore",
  slogan: "IPL Champions 2024! 🏆",
  subtitle: "Finally, Cup Namde!",
  logo: "/placeholder.svg?height=80&width=80",
}

const players: Player[] = [
  {
    id: 1,
    name: "Virat Kohli",
    role: "Captain & Batsman",
    battingAverage: 52.8,
    image: "/placeholder.svg?height=200&width=200",
    strikeRate: 138.4,
    matchesPlayed: 251,
    jerseyNumber: 18,
    bestPerformance: "124* vs CSK (Final 2024)",
    totalRuns: 8547,
    specialty: "Championship Captain",
    championshipContribution: "Led from front with 741 runs in IPL 2024, including match-winning century in the final",
  },
  {
    id: 2,
    name: "Faf du Plessis",
    role: "Opening Batsman",
    battingAverage: 41.3,
    image: "/placeholder.svg?height=200&width=200",
    strikeRate: 134.2,
    matchesPlayed: 117,
    jerseyNumber: 19,
    bestPerformance: "115* vs MI (Qualifier 1)",
    totalRuns: 3842,
    specialty: "Championship Opener",
    championshipContribution: "Explosive starts throughout the tournament, 623 runs with 6 fifties in IPL 2024",
  },
  {
    id: 3,
    name: "Mohammed Siraj",
    role: "Fast Bowler",
    battingAverage: 9.2,
    bowlingAverage: 21.4,
    image: "/placeholder.svg?height=200&width=200",
    strikeRate: 156.8,
    matchesPlayed: 108,
    jerseyNumber: 73,
    bestPerformance: "5/13 vs RR (Eliminator)",
    totalWickets: 142,
    specialty: "Championship Spearhead",
    championshipContribution: "Purple Cap winner 2024 with 27 wickets, including crucial 4-wicket haul in final",
  },
  {
    id: 4,
    name: "Dinesh Karthik",
    role: "Wicket Keeper & Finisher",
    battingAverage: 28.7,
    image: "/placeholder.svg?height=200&width=200",
    strikeRate: 152.3,
    matchesPlayed: 267,
    jerseyNumber: 1,
    bestPerformance: "89* vs GT (Semi-Final)",
    totalRuns: 5234,
    specialty: "Championship Finisher",
    championshipContribution: "Clutch performances in playoffs, unbeaten in final 4 matches of the tournament",
  },
  {
    id: 5,
    name: "Glenn Maxwell",
    role: "All Rounder",
    battingAverage: 32.4,
    bowlingAverage: 28.9,
    image: "/placeholder.svg?height=200&width=200",
    strikeRate: 161.7,
    matchesPlayed: 142,
    jerseyNumber: 32,
    bestPerformance: "104* & 3/28 vs KKR",
    totalRuns: 3456,
    totalWickets: 52,
    specialty: "Championship X-Factor",
    championshipContribution: "Match-winner in crucial games, 487 runs and 18 wickets in championship season",
  },
  {
    id: 6,
    name: "Will Jacks",
    role: "All Rounder",
    battingAverage: 35.6,
    bowlingAverage: 32.1,
    image: "/placeholder.svg?height=200&width=200",
    strikeRate: 148.9,
    matchesPlayed: 28,
    jerseyNumber: 17,
    bestPerformance: "92* vs PBKS (League)",
    totalRuns: 712,
    totalWickets: 15,
    specialty: "Championship Breakthrough",
    championshipContribution: "Breakout season with 456 runs, key partnerships in middle order",
  },
  {
    id: 7,
    name: "Yash Dayal",
    role: "Fast Bowler",
    battingAverage: 8.1,
    bowlingAverage: 24.7,
    image: "/placeholder.svg?height=200&width=200",
    strikeRate: 142.3,
    matchesPlayed: 34,
    jerseyNumber: 25,
    bestPerformance: "4/19 vs DC (League)",
    totalWickets: 45,
    specialty: "Championship Pacer",
    championshipContribution: "Emerged as reliable death bowler, 21 wickets in championship campaign",
  },
  {
    id: 8,
    name: "Karn Sharma",
    role: "Spin Bowler",
    battingAverage: 12.4,
    bowlingAverage: 26.8,
    image: "/placeholder.svg?height=200&width=200",
    strikeRate: 118.7,
    matchesPlayed: 67,
    jerseyNumber: 29,
    bestPerformance: "4/22 vs LSG (Qualifier 2)",
    totalWickets: 78,
    specialty: "Championship Spinner",
    championshipContribution: "Crucial middle-overs control, 16 wickets including key playoff performances",
  },
  {
    id: 9,
    name: "Rajat Patidar",
    role: "Middle Order Batsman",
    battingAverage: 29.8,
    image: "/placeholder.svg?height=200&width=200",
    strikeRate: 144.6,
    matchesPlayed: 45,
    jerseyNumber: 54,
    bestPerformance: "112* vs SRH (League)",
    totalRuns: 1342,
    specialty: "Championship Hero",
    championshipContribution: "Local hero's dream run, 398 runs including century in league stage",
  },
]

export default function RCBChampionsWebsite() {
  const [selectedPlayer, setSelectedPlayer] = useState<Player | null>(null)

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-amber-900 relative overflow-hidden">
      {/* Championship Celebration Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-yellow-500/30 to-amber-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-gradient-to-r from-amber-500/25 to-yellow-600/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-gradient-to-r from-red-500/20 to-amber-600/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

        {/* Floating Trophy Elements */}
        <div className="absolute top-32 right-1/4 animate-bounce">
          <Trophy className="h-8 w-8 text-yellow-400/30" />
        </div>
        <div className="absolute bottom-40 left-1/4 animate-bounce delay-1000">
          <Medal className="h-6 w-6 text-amber-400/30" />
        </div>
        <div className="absolute top-1/2 right-12 animate-bounce delay-2000">
          <Crown className="h-7 w-7 text-yellow-500/30" />
        </div>
      </div>

      {/* Championship Header */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/80 via-red-800/60 to-amber-800/80 backdrop-blur-sm"></div>
        <div className="relative container mx-auto px-4 py-20">
          {/* Championship Banner */}
          <div className="backdrop-blur-xl bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border-2 border-yellow-400/50 rounded-3xl p-3 mb-8 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Trophy className="h-8 w-8 text-yellow-400 animate-pulse" />
                <span className="text-2xl md:text-3xl font-black text-yellow-400 tracking-wide">
                  IPL CHAMPIONS 2024
                </span>
                <Trophy className="h-8 w-8 text-yellow-400 animate-pulse" />
              </div>
              <p className="text-white text-lg font-bold">🏆 FINALLY, THE WAIT IS OVER! 🏆</p>
            </div>
          </div>

          {/* Main Header Container */}
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 shadow-2xl">
            <div className="text-center">
              <div className="flex items-center justify-center gap-6 mb-8">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition-opacity animate-pulse"></div>
                  <div className="relative backdrop-blur-sm bg-white/10 border border-white/20 rounded-full p-4">
                    <Image
                      src={teamData.logo || "/placeholder.svg"}
                      alt="RCB Champions Logo"
                      width={80}
                      height={80}
                      className="rounded-full"
                    />
                    <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full p-2">
                      <Crown className="h-8 w-8 text-red-900" />
                    </div>
                  </div>
                </div>
                <div>
                  <h1 className="text-4xl md:text-6xl font-black bg-gradient-to-r from-yellow-400 via-amber-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-2xl">
                    {teamData.name}
                  </h1>
                  <p className="text-2xl md:text-3xl text-yellow-400 font-black mt-3 tracking-wide drop-shadow-lg animate-pulse">
                    {teamData.slogan}
                  </p>
                  <p className="text-xl text-white font-bold mt-2">{teamData.subtitle}</p>
                </div>
              </div>

              {/* Championship Achievement Cards */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
                <div className="backdrop-blur-md bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/50 rounded-2xl p-6 hover:bg-yellow-500/30 transition-all duration-300">
                  <Trophy className="h-10 w-10 text-yellow-400 mx-auto mb-3 animate-bounce" />
                  <p className="text-yellow-400 font-black text-lg">IPL CHAMPIONS</p>
                  <p className="text-white text-sm font-bold">2024</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <Flame className="h-10 w-10 text-red-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Unbeaten Run</p>
                  <p className="text-red-400 text-lg font-bold">8 Matches</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <Star className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Final Score</p>
                  <p className="text-blue-400 text-lg font-bold">RCB Won by 7 wkts</p>
                </div>
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                  <Medal className="h-10 w-10 text-purple-400 mx-auto mb-3" />
                  <p className="text-white font-semibold">Home Ground</p>
                  <p className="text-purple-400 text-lg font-bold">Chinnaswamy</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Championship Squad Section */}
      <main className="container mx-auto px-4 py-20 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-8 max-w-4xl mx-auto shadow-2xl">
            <div className="flex items-center justify-center gap-4 mb-6">
              <Trophy className="h-12 w-12 text-yellow-400 animate-pulse" />
              <h2 className="text-5xl md:text-6xl font-black text-white drop-shadow-lg">Championship Squad 2025</h2>
              <Trophy className="h-12 w-12 text-yellow-400 animate-pulse" />
            </div>
            <p className="text-xl text-white/90 leading-relaxed mb-4">
              Meet the heroes who brought home RCB's first-ever IPL Championship
            </p>
            <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-red-900 font-black text-lg px-6 py-2">
              🏆 IPL CHAMPIONS 2024 🏆
            </Badge>
          </div>
        </div>

        {/* Championship Squad Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {players.map((player, index) => (
            <Card
              key={player.id}
              className="group cursor-pointer transform transition-all duration-500 hover:scale-105 hover:rotate-1 backdrop-blur-xl bg-white/10 border border-white/20 text-white overflow-hidden hover:bg-white/15 hover:border-yellow-400/50 shadow-2xl hover:shadow-yellow-500/30"
              onClick={() => setSelectedPlayer(player)}
              style={{
                animationDelay: `${index * 100}ms`,
                animation: "fadeInUp 0.6s ease-out forwards",
              }}
            >
              <CardHeader className="relative pb-0">
                {/* Championship Badge */}
                <div className="absolute top-2 left-2 z-10">
                  <div className="backdrop-blur-md bg-gradient-to-r from-yellow-500/90 to-amber-500/90 text-red-900 font-black px-2 py-1 rounded-full text-xs flex items-center gap-1">
                    <Trophy className="h-3 w-3" />
                    CHAMPION
                  </div>
                </div>

                {/* Jersey Number */}
                <div className="absolute top-2 right-2 z-10">
                  <div className="backdrop-blur-md bg-gradient-to-r from-red-600 to-red-700 text-yellow-400 font-black px-3 py-1 rounded-full text-sm shadow-lg border border-yellow-400/30">
                    #{player.jerseyNumber}
                  </div>
                </div>

                <div className="flex flex-col items-center pt-12">
                  <div className="relative mb-6 group-hover:scale-110 transition-transform duration-300">
                    {/* Championship Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-amber-500 to-yellow-600 rounded-full blur-md opacity-60 group-hover:opacity-90 transition-opacity animate-pulse"></div>
                    <div className="relative backdrop-blur-sm bg-white/10 border-2 border-yellow-400/50 rounded-full p-1">
                      <Image
                        src={player.image || "/placeholder.svg"}
                        alt={player.name}
                        width={100}
                        height={100}
                        className="rounded-full"
                      />
                    </div>
                    <div className="absolute -bottom-2 -right-2 backdrop-blur-md bg-gradient-to-r from-yellow-500 to-amber-500 border border-white/30 rounded-full p-2">
                      <Crown className="h-4 w-4 text-red-900" />
                    </div>
                  </div>

                  <CardTitle className="text-xl font-bold text-center mb-2 group-hover:text-yellow-400 transition-colors">
                    {player.name}
                  </CardTitle>
                  <p className="text-white/80 font-medium text-sm mb-2">{player.role}</p>
                  <Badge
                    variant="outline"
                    className="backdrop-blur-md bg-yellow-500/20 border-yellow-400/70 text-yellow-400 text-xs font-bold mb-4"
                  >
                    {player.specialty}
                  </Badge>
                </div>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-3">
                  {/* Championship Stats */}
                  <div className="backdrop-blur-sm bg-gradient-to-r from-yellow-500/10 to-amber-500/10 border border-yellow-400/30 rounded-xl p-3 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm flex items-center gap-2">
                        <Target className="h-3 w-3" />
                        Batting Avg:
                      </span>
                      <span className="font-bold text-yellow-400">{player.battingAverage}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-white/70 text-sm flex items-center gap-2">
                        <TrendingUp className="h-3 w-3" />
                        Strike Rate:
                      </span>
                      <span className="font-bold text-green-400">{player.strikeRate}</span>
                    </div>
                    {player.bowlingAverage && (
                      <div className="flex justify-between items-center">
                        <span className="text-white/70 text-sm">Bowl Avg:</span>
                        <span className="font-bold text-blue-400">{player.bowlingAverage}</span>
                      </div>
                    )}
                  </div>

                  {/* Career Stats */}
                  {(player.totalRuns || player.totalWickets) && (
                    <div className="backdrop-blur-sm bg-white/5 border border-white/10 rounded-xl p-3">
                      {player.totalRuns && (
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-white/70 text-sm">Career Runs:</span>
                          <span className="font-bold text-orange-400">{player.totalRuns.toLocaleString()}</span>
                        </div>
                      )}
                      {player.totalWickets && (
                        <div className="flex justify-between items-center">
                          <span className="text-white/70 text-sm">Career Wickets:</span>
                          <span className="font-bold text-purple-400">{player.totalWickets}</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <Button
                  className="w-full mt-4 backdrop-blur-md bg-gradient-to-r from-yellow-500/90 to-amber-500/90 hover:from-yellow-400 hover:to-amber-400 text-red-900 font-bold text-sm border border-yellow-400/30 shadow-lg hover:shadow-yellow-500/50 transition-all duration-300"
                  onClick={(e) => {
                    e.stopPropagation()
                    setSelectedPlayer(player)
                  }}
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  Championship Stats
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>

      {/* Enhanced Player Modal */}
      <Dialog open={!!selectedPlayer} onOpenChange={() => setSelectedPlayer(null)}>
        <DialogContent className="max-w-5xl backdrop-blur-2xl bg-red-900/80 border border-yellow-400/30 text-white shadow-2xl">
          {selectedPlayer && (
            <>
              <DialogHeader className="backdrop-blur-md bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/50 rounded-2xl p-6 -m-6 mb-6">
                <DialogTitle className="text-3xl font-black text-center bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent flex items-center justify-center gap-3">
                  <Trophy className="h-8 w-8 text-yellow-400" />
                  Championship Hero Stats
                  <Trophy className="h-8 w-8 text-yellow-400" />
                </DialogTitle>
              </DialogHeader>

              <div className="space-y-8">
                {/* Enhanced Player Header */}
                <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6">
                  <div className="flex items-center gap-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full blur-lg opacity-60 animate-pulse"></div>
                      <div className="relative backdrop-blur-sm bg-white/10 border-2 border-yellow-400/50 rounded-full p-2">
                        <Image
                          src={selectedPlayer.image || "/placeholder.svg"}
                          alt={selectedPlayer.name}
                          width={120}
                          height={120}
                          className="rounded-full"
                        />
                      </div>
                      <div className="absolute -top-3 -right-3 backdrop-blur-md bg-gradient-to-r from-yellow-500 to-amber-500 border border-white/30 rounded-full p-2">
                        <Crown className="h-6 w-6 text-red-900" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-3xl font-black mb-2">{selectedPlayer.name}</h3>
                      <p className="text-white/80 text-xl mb-3">{selectedPlayer.role}</p>
                      <Badge
                        variant="outline"
                        className="backdrop-blur-md bg-yellow-500/20 border-yellow-400 text-yellow-400 text-sm font-bold mb-3"
                      >
                        {selectedPlayer.specialty}
                      </Badge>
                      <div className="backdrop-blur-md bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/50 rounded-lg p-3">
                        <p className="text-yellow-400 font-bold text-sm mb-1">🏆 Championship Contribution:</p>
                        <p className="text-white text-sm">{selectedPlayer.championshipContribution}</p>
                      </div>
                    </div>
                    <div className="backdrop-blur-md bg-gradient-to-r from-yellow-500/90 to-amber-500/90 text-red-900 rounded-2xl w-20 h-20 flex items-center justify-center border border-white/20 shadow-lg">
                      <span className="text-2xl font-black">#{selectedPlayer.jerseyNumber}</span>
                    </div>
                  </div>
                </div>

                {/* Championship Stats Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Card className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-yellow-400/30 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Target className="h-10 w-10 text-yellow-400 mx-auto mb-3" />
                      <p className="text-sm text-white/70 mb-1">Strike Rate</p>
                      <p className="text-3xl font-black text-yellow-400">{selectedPlayer.strikeRate}</p>
                    </CardContent>
                  </Card>

                  <Card className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-yellow-400/30 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Calendar className="h-10 w-10 text-green-400 mx-auto mb-3" />
                      <p className="text-sm text-white/70 mb-1">Matches Played</p>
                      <p className="text-3xl font-black text-green-400">{selectedPlayer.matchesPlayed}</p>
                    </CardContent>
                  </Card>

                  <Card className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-yellow-400/30 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Shirt className="h-10 w-10 text-blue-400 mx-auto mb-3" />
                      <p className="text-sm text-white/70 mb-1">Jersey Number</p>
                      <p className="text-3xl font-black text-blue-400">#{selectedPlayer.jerseyNumber}</p>
                    </CardContent>
                  </Card>

                  <Card className="backdrop-blur-md bg-white/10 border border-white/20 text-white hover:bg-white/15 hover:border-yellow-400/30 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <Award className="h-10 w-10 text-orange-400 mx-auto mb-3" />
                      <p className="text-sm text-white/70 mb-1">Batting Average</p>
                      <p className="text-3xl font-black text-orange-400">{selectedPlayer.battingAverage}</p>
                    </CardContent>
                  </Card>
                </div>

                {/* Championship Performance */}
                <Card className="backdrop-blur-md bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="text-yellow-400 flex items-center gap-3 text-xl">
                      <Trophy className="h-6 w-6" />
                      Best Championship Performance
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-2xl font-bold mb-2">{selectedPlayer.bestPerformance}</p>
                    <Badge className="bg-gradient-to-r from-yellow-500 to-amber-500 text-red-900 font-bold">
                      🏆 Championship Moment
                    </Badge>
                  </CardContent>
                </Card>

                {/* Career Stats */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {selectedPlayer.totalRuns && (
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                      <p className="text-white/70 text-sm mb-2">Career Runs</p>
                      <p className="text-4xl font-black text-orange-400">{selectedPlayer.totalRuns.toLocaleString()}</p>
                    </div>
                  )}
                  {selectedPlayer.totalWickets && (
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                      <p className="text-white/70 text-sm mb-2">Career Wickets</p>
                      <p className="text-4xl font-black text-purple-400">{selectedPlayer.totalWickets}</p>
                    </div>
                  )}
                  {selectedPlayer.bowlingAverage && (
                    <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 hover:bg-white/15 transition-all duration-300">
                      <p className="text-white/70 text-sm mb-2">Bowling Average</p>
                      <p className="text-4xl font-black text-blue-400">{selectedPlayer.bowlingAverage}</p>
                    </div>
                  )}
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>

      {/* Championship Footer */}
      <footer className="relative mt-20">
        <div className="backdrop-blur-xl bg-white/10 border-t border-yellow-400/30">
          <div className="container mx-auto px-4 py-12 text-center">
            <div className="backdrop-blur-md bg-gradient-to-r from-yellow-500/20 to-amber-500/20 border border-yellow-400/50 rounded-3xl p-8 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <Trophy className="h-10 w-10 text-yellow-400 animate-bounce" />
                <span className="text-3xl font-black bg-gradient-to-r from-yellow-400 to-amber-300 bg-clip-text text-transparent">
                  IPL CHAMPIONS 2024
                </span>
                <Trophy className="h-10 w-10 text-yellow-400 animate-bounce" />
              </div>
              <p className="text-white text-2xl font-bold mb-4">🏆 Finally, Cup Namde! 🏆</p>
              <p className="text-yellow-400 text-lg font-bold mb-2">Royal Challengers Bangalore</p>
              <p className="text-white/70 text-sm">© 2025 RCB Champions. The Wait is Over!</p>
            </div>
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  )
}
