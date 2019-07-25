export interface Entry{
    title: String,
    company: String,
    date: String,
    link?: String,
    linkText?: String,
    content: String,
    chips: String[],
    state: String,
}

export interface ProjEntry{
    title: String,
    type: String,
    date: String,
    link?: String,
    linkText?: String,
    link2?: String,
    linkText2?: String,
    content: String,
    chips: String[],
    state: String,
}
  