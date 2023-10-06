export interface Order {
    id: string
    title: string
    body: string
    priority: 'high' | 'low'
    user_email: string
}
