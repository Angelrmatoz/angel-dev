"use client";

import React, {useEffect, useState} from "react";
import {HoverEffect, HoverItem} from "@/components/ui/card-hover-effect";
import {IconBrandGithub, IconExternalLink, IconStar} from "@tabler/icons-react";
import {Badge} from "@/components/ui/badge";
import {Alert, AlertTitle, AlertDescription} from "@/components/ui/alert";
import LoaderOneDemo from "@/components/ui/loader/index";

interface Repo {
    name: string;
    description?: string | null;
    url: string;
    stargazerCount?: number | null;
    primaryLanguage?: { name?: string | null } | null;
    homepageUrl?: string | null;
}

export const Projects = () => {
    const [repos, setRepos] = useState<Repo[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRepos = async () => {
            try {
                setError(null);
                const query = `query Pinned($username: String!) { pinnedRepos(username: $username) { name description url stargazerCount primaryLanguage { name } homepageUrl } }`;
                const variables = {username: "Angelrmatoz"};

                const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL || "http://localhost:9000"}/`, {
                    method: "POST",
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({query, variables}),
                });

                if (!res.ok) {
                    throw new Error(`Network error: ${res.status} ${res.statusText}`);
                }

                const json = await res.json();
                if (json.errors) {
                    const errArray: unknown[] = Array.isArray(json.errors) ? json.errors : [json.errors];
                    const msg = errArray
                        .map((e: unknown) => {
                            if (typeof e === 'string') return e;
                            if (e && typeof e === 'object') {
                                const m = (e as Record<string, unknown>)['message'];
                                if (typeof m === 'string') return m;
                            }
                            try {
                                return JSON.stringify(e);
                            } catch {
                                return String(e);
                            }
                        })
                        .join("; ");
                    throw new Error(msg);
                }

                const data = json.data?.pinnedRepos ?? [];
                setRepos(data);
            } catch (err: unknown) {
                console.error("Error fetching pinned repos:", err);
                let message = 'Error desconocido al conectar con el servidor';
                if (typeof err === 'string') message = err;
                else if (err && typeof err === 'object') {
                    const m = (err as Record<string, unknown>)['message'];
                    if (typeof m === 'string') message = m;
                }
                setError(message);
            } finally {
                setLoading(false);
            }
        };

        fetchRepos();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center py-20">
                <LoaderOneDemo/>
            </div>
        );
    }

    const items: HoverItem[] = repos.map(r => ({
        title: r.name,
        description: r.description || '',
        link: r.url || '',
        payload: r
    }));

    return (
        <div className="w-full py-20 scroll-mt-20" id="projects">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-white mb-10">
                Proyectos Recientes
            </h2>
            <div className="max-w-7xl mx-auto px-4">
                {error ? (
                    <Alert variant="destructive">
                        <AlertTitle>Problema de conexión</AlertTitle>
                        <AlertDescription>
                            <p>{error}</p>
                        </AlertDescription>
                    </Alert>
                ) : (
                    <HoverEffect
                        items={items}
                        renderItem={(item) => {
                            const repo = item.payload as Repo;
                            return (
                                <div className="flex flex-col h-full">
                                    <div className="flex items-center justify-between mb-2">
                                        <h4 className="text-zinc-100 font-bold tracking-wide text-xl flex items-center gap-2">
                                            {repo.name}
                                        </h4>
                                        <div className="flex items-center gap-2">
                                            {repo.homepageUrl && (
                                                <div onClick={(e) => {
                                                    e.preventDefault();
                                                    window.open(repo.homepageUrl as string, '_blank');
                                                }}>
                                                    <IconExternalLink size={18}
                                                                      className="text-blue-500 hover:text-blue-400 transition-colors cursor-pointer"/>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                    <p className="text-zinc-400 tracking-wide leading-relaxed text-sm mb-4">
                                        {repo.description || "Sin descripción disponible."}
                                    </p>

                                    <div className="mt-auto flex justify-between items-center">
                                        <div className="flex items-center gap-3">
                                            {repo.primaryLanguage?.name && (
                                                <Badge className="bg-white/10 text-gray-200 border-none">
                                                    {repo.primaryLanguage?.name}
                                                </Badge>
                                            )}
                                            {repo.stargazerCount && repo.stargazerCount > 0 && (
                                                <span className="flex items-center gap-1 text-yellow-500 text-xs">
                          <IconStar size={14} fill="currentColor"/>
                                                    {repo.stargazerCount}
                        </span>
                                            )}
                                        </div>
                                        <div className="text-white/50 group-hover:text-white transition-colors">
                                            <IconBrandGithub size={20}/>
                                        </div>
                                    </div>
                                </div>
                            );
                        }}
                    />
                )}
            </div>
        </div>
    );
};
