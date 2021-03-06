export interface IGitSourceSettings {
  repositoryPath: string
  repositoryOwner: string
  repositoryName: string
  ref: string
  commit: string
  clean: boolean
  fetchDepth: number
  lfs: boolean
  submodules: boolean
  nestedSubmodules: boolean
  authToken: string
  persistCredentials: boolean
}
