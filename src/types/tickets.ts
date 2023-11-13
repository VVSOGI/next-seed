export interface Order {
    id: string
    title: string
    description: string
    priority: 'high' | 'low'
    email: string
}
