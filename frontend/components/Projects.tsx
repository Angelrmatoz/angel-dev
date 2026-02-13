"use client";

import React, { useEffect, useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { IconBrandGithub, IconExternalLink, IconStar } from "@tabler/icons-react";
import { Badge } from "@/components/ui/badge";

interface Repo {
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  homepage: string;
  topics: string[];
}

export const Projects = () => {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch("https://api.github.com/users/Angelrmatoz/repos?sort=updated&per_page=100");
        const data = await response.json();
        
        if (Array.isArray(data)) {
          // Intentar filtrar por el tópico 'portfolio' para que el usuario pueda elegir qué mostrar desde GitHub
          let filteredRepos = data.filter((repo: Repo) => 
            repo.topics && repo.topics.includes("portfolio")
          );

          // Si no hay ninguno marcado con 'portfolio', mostrar los 6 más recientes (excluyendo forks si es posible)
          if (filteredRepos.length === 0) {
            filteredRepos = data
              .filter((repo: any) => !repo.fork)
              .slice(0, 6);
          } else {
            // Ordenar los marcados con 'portfolio' por estrellas o fecha si se desea
            filteredRepos.sort((a: Repo, b: Repo) => b.stargazers_count - a.stargazers_count);
          }
          
          setRepos(filteredRepos);
        }
      } catch (error) {
        console.error("Error fetching GitHub repos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
      </div>
    );
  }

  return (
    <div className="w-full py-20 scroll-mt-20" id="projects">
      <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10">
        Proyectos Recientes
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <HoverEffect
          items={repos.map(r => ({ ...r, title: r.name, link: r.html_url }))}
          renderItem={(repo: Repo & { title: string; link: string }) => (
            <div className="flex flex-col h-full">
              <div className="flex items-center justify-between mb-2">
                <h4 className="text-zinc-100 font-bold tracking-wide text-xl flex items-center gap-2">
                  {repo.name}
                </h4>
                <div className="flex items-center gap-2">
                    {repo.homepage && (
                        <div onClick={(e) => {
                            e.preventDefault();
                            window.open(repo.homepage, '_blank');
                        }}>
                            <IconExternalLink size={18} className="text-blue-500 hover:text-blue-400 transition-colors cursor-pointer" />
                        </div>
                    )}
                </div>
              </div>
              <p className="text-zinc-400 tracking-wide leading-relaxed text-sm mb-4">
                {repo.description || "Sin descripción disponible."}
              </p>
              
              <div className="mt-auto flex justify-between items-center">
                <div className="flex items-center gap-3">
                  {repo.language && (
                    <Badge className="bg-white/10 text-gray-200 border-none">
                      {repo.language}
                    </Badge>
                  )}
                  {repo.stargazers_count > 0 && (
                    <span className="flex items-center gap-1 text-yellow-500 text-xs">
                      <IconStar size={14} fill="currentColor" />
                      {repo.stargazers_count}
                    </span>
                  )}
                </div>
                <div className="text-white/50 group-hover:text-white transition-colors">
                    <IconBrandGithub size={20} />
                </div>
              </div>
            </div>
          )}
        />
      </div>
    </div>
  );
};
